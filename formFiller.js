const logger = require('./logger');
const { getGroqChatCompletion } = require('./groq');
const { launchBrowser, setupPage, navigateToForm } = require('./utils');
const personas = require('./personas');

async function fillGoogleForm() {
  const browser = await launchBrowser();
  const page = await setupPage(browser);

  const formUrl = process.env.GOOGLE_FORM_URL;

  try {
    await navigateToForm(page, formUrl);

    // Select "Yes" on the consent page
    await page.waitForSelector('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div > div > div > div.oyXaNc > div:nth-child(2) > div > span > div > div:nth-child(1)');
    await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div > div > div > div.oyXaNc > div:nth-child(2) > div > span > div > div:nth-child(1)');

    while (true) {
      const questions = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('div[role="radiogroup"], div[role="checkbox"]')).map((el, index) => {
          const questionElement = el.closest('form').querySelectorAll('div[role="heading"]')[index];
          const questionText = questionElement ? questionElement.innerText : 'No question text found';
          const options = Array.from(el.querySelectorAll('div[role="radio"], div[role="checkbox"]')).map(option => ({
            value: option.getAttribute('data-value'),
            ariaLabel: option.getAttribute('aria-label'),
            id: option.getAttribute('id')
          }));
          return {
            text: questionText,
            options: options
          };
        });
      });

      logger.info(`Questions: ${JSON.stringify(questions, null, 2)}`);

      for (let question of questions) {
        if (!question.text || question.text === 'No question text found') {
          logger.error('No question text found or question text is empty.');
          continue;
        }

        const persona = personas[Math.floor(Math.random() * personas.length)];
        const answer = await getGroqChatCompletion(question.text, persona);
        logger.info(`Persona: ${persona.name}, Background: ${persona.background}`);
        logger.info(`Personality Traits: ${JSON.stringify(persona.personalityTraits)}`);
        logger.info(`Stance: ${JSON.stringify(persona.stance)}`);
        logger.info(`Question: ${question.text}`);
        logger.info(`Answer: ${answer}`);

        const option = question.options.find(o => o.value === answer);

        if (option) {
          const optionSelector = `div[id="${option.id}"][role="radio"], div[id="${option.id}"][role="checkbox"]`;
          await page.waitForSelector(optionSelector, { timeout: 10000 });
          await page.click(optionSelector).catch((err) => {
            logger.error(`Error clicking selector: ${err}`);
          });
        } else {
          logger.error(`Option not found for answer: ${answer}`);
        }
      }

      const nextButton = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('span.NPEfkd.RveJvd.snByac'));
        return buttons.find(button => button.innerText.includes('Next') || button.innerText.includes('Submit'));
      });

      if (nextButton) {
        await nextButton.asElement().click();
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
      } else {
        logger.error('Neither Next nor Submit button found.');
        break;
      }
    }
  } catch (error) {
    logger.error(`Error filling Google Form: ${error}`);
  } finally {
    await browser.close();
  }
}

module.exports = { fillGoogleForm };

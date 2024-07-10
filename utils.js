const puppeteer = require('puppeteer');
const logger = require('./logger');

async function launchBrowser() {
  const browser = await puppeteer.launch({ 
    headless: true, // Change to true for production
    userDataDir: './tmp', // Directory to store user data
    defaultViewport: false
  });
  return browser;
}

async function setupPage(browser) {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  return page;
}

async function navigateToForm(page, url) {
  if (!url) {
    logger.error('Google Form URL is not set in the environment variables.');
    throw new Error('Google Form URL is not set.');
  }
  await page.goto(url, { waitUntil: 'networkidle2' });
}

module.exports = { launchBrowser, setupPage, navigateToForm };

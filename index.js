require('dotenv').config();
const logger = require('./logger');
const { fillGoogleForm } = require('./formFiller');

fillGoogleForm().catch(error => {
  logger.error(`Script execution failed: ${error}`);
  process.exit(1);
});

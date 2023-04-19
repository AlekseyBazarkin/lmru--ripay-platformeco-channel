const { v4: uuidv4 }= require('uuid');

module.exports = (settings, config, channelPath) => {

  if(!config.helpers) {
    config.helpers = {}
  }
  config.helpers.uuidv4 = uuidv4;

  return config;
}
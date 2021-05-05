function setConfigSample(){
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties({
    'token': 'YOUR-ACCESS-TOKEN',
    'channel': 'YOUR-SLACK-CHANNEL',
    'series_id': 'YOUR-COMMUNITY-ID'
  });
  const props = PropertiesService.getScriptProperties().getProperties();
  Logger.log(props);
}
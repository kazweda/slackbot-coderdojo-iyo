function setConfigSample(){
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties({
    'token': 'MY-ACCESS-TOKEN',
    'channel': 'MY-SLACK-CHANNEL',
    'series_id': 'MY-COMMUNITY-ID'
  });
  const props = PropertiesService.getScriptProperties().getProperties();
  Logger.log(props);
}
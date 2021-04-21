function post_to_slack() {
  const json = getJsonByApi();
  const text = getEventList(json);
  const channel = "イベント運営";
  post(text, channel);
}

function post(text, channel){
  const data = {
    "text":text,
    "channel":channel
  }
  const token = PropertiesService.getScriptProperties().getProperty("token");
  var options = {
    "method":"post",
    "contentType":"application/json",
    "headers":{"Authorization":"Bearer "+token},
    "payload":JSON.stringify(data)
  }
  var ret = UrlFetchApp.fetch("https://slack.com/api/chat.postMessage",options);
}

function getJsonByApi(){
  var api = "https://connpass.com/api/v1/event/";
  api += "?series_id=8962";
  api += "&order=3"
  api += "&count=1"
  return UrlFetchApp.fetch(api).getContentText();
}

function getEventList(json){
  const jsonData = JSON.parse(json);
  var result = "";
  for( i in jsonData.events ){
    var startAt = new Date(jsonData.events[i].started_at);
    var startDateTime = Utilities.formatDate(startAt, 'Asia/Tokyo', 'MM-dd HH:mm');
    result += startDateTime + " ";
    result += jsonData.events[i].title + "\n";
    result += jsonData.events[i].event_url + "\n";
  } 
  Logger.log( result );
  return result;
}
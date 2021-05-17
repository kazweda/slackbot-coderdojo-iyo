function post_to_slack() {
  const props = PropertiesService.getScriptProperties().getProperties();
  const json = getJsonByApi(props.series_id);
  const text = getEventList(json);
  post(text, props.channel, props.token);
}

function post(text, channel, token){
  const data = {
    "text":text,
    "channel":channel
  }
  var options = {
    "method":"post",
    "contentType":"application/json",
    "headers":{"Authorization":"Bearer " + token},
    "payload":JSON.stringify(data)
  }
  var ret = UrlFetchApp.fetch("https://slack.com/api/chat.postMessage",options);
}

function getJsonByApi(series_id){
  var api = "https://connpass.com/api/v1/event/";
  api += "?series_id=" + series_id;
  api += "&order=3";
  api += "&count=1";
  // api += "&ym=202106";
  Logger.log(api);
  return UrlFetchApp.fetch(api).getContentText();
}

function getEventList(json){
  const jsonData = JSON.parse(json);
  var result = "";

  for( i in jsonData.events ){
    var startAt = new Date(jsonData.events[i].started_at);

    const today = new Date();
    if (startAt < today) {
      continue;
    }

    var startDateTime = Utilities.formatDate(startAt, 'Asia/Tokyo', 'MM-dd HH:mm');
    result += startDateTime + " ";
    result += jsonData.events[i].title + "\n";
    result += jsonData.events[i].event_url + "\n";
  }
  if (result == "") {
    result = "イベントは見つかりませんでした。";
  }
  Logger.log( result );
  return result;
}
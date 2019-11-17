var access_token = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN'); 
var userID = PropertiesService.getScriptProperties().getProperty('USER_ID');
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';



function doWeather(){
  var message = weather();
  sendLine(message);
}

function doTrash(){
  var message = trashMessage();
  if(message != -1){
    sendLine(message);
  }
}



//LINEでメッセージを送信
function sendLine(message) {
  push(message);
}


//実際にメッセージを送信する関数
function push(message) {

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type" : "application/json; charset=UTF-8",
    'Authorization': 'Bearer ' + access_token,
  };

  //toがメッセージ送信相手
  //textが送信されるメッセージ
  var postData = {
    "to" : userID,
    "messages" : [
      {
        'type':'text',
        'text':message,
      }
    ]
  };

  var options = {
    "method" : "post",
    "headers" : headers,
    "payload" : JSON.stringify(postData)
  };

  return UrlFetchApp.fetch(url, options);
}


//東京の天気
function weather() {
  
    var response = UrlFetchApp.fetch("http://weather.livedoor.com/forecast/webservice/json/v1?city=130010"); // 「CITY_ID」を、天気を取得したいcity idに置き換える
    var json=JSON.parse(response.getContentText()); //受け取ったJSONデータを解析して配列jsonに格納
    /* メッセージ */
    var temp;
    if(!json["forecasts"][0]["temperature"]["max"]){
      temp = "発表されておりやせん。";
    }else{
      temp = json["forecasts"][0]["temperature"]["max"]["celsius"] + "度";
    }
    
    var strBody = "あなたさまの御国、" + json["location"]["city"] + "の天気でやんす。\n";
    strBody += "本日は" + json["forecasts"][0]["telop"] + "のようでござんす。\n";
    strBody += "最高気温は" + temp + "\n";
    strBody += "気を付けて行ってらっしゃいませ。";
  
    return strBody;
  }
  
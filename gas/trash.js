function trashMessage(){
  
    //現在日を取得
    var day = new Date();
    
    //もえるごみ
    if(day.getDay() == 1 || day.getDay() == 4){
      return "明日は「もえるごみ」でやんす。";
    }
    
    //ダンボール、ペットボトル
    if(day.getDay() == 5){
      return "明日は「ダンボールとペットボトル」でやんす。";
    }
    
    //びん、かん
    if(day.getDay() == 0){
      return "明日は「ビンとカン」でやんす。";
    }
    
    return -1;
    
  }
  
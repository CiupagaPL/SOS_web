const key="visit", def="count";

let init=function(){
  if(localStorage.getItem(key)===null){
    localStorage.setItem(key, 1);
    document.getElementById(def).innerHTML="00000001";
  }
  else{
    localStorage.setItem(key, Number(localStorage.getItem(key))+1);

    let length=8-localStorage.getItem(key).length;
    let value="";
    while(length!=0){
      value+="0";
      length--;
    }
    value+=localStorage.getItem(key);

    document.getElementById(def).innerHTML=value;
  }
}

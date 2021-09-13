
  //good
function shout(string) {
      return string.toUpperCase();
  }

  //good
  function whisper(string) {
    return string.toLowerCase();
}
  //good
function logShout(string) {
    console.log(string.toUpperCase());
}
  //good
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if(string === string.toLowerCase()){
        return "I can\'t hear you!";
    } else if(string === "I love you, Grandma."){
        return "I love you, too.";
    }
}

 
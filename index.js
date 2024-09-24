let lenButton = document.querySelectorAll("button").length;

function playAudio(key) {
  let faudio;
  switch (key) {
    case "w" :
      faudio = "tom-1";
      break;
    case "a" :
      faudio = "tom-2";
      break;
    case "s" :
      faudio = "tom-3";
      break;
    case "d" :
      faudio = "tom-4";
      break;
    case "j" :
      faudio = "snare";
      break;
    case "k" :
      faudio = "crash";
      break;
    case "l" :
      faudio = "kick-bass";
      break;
    default:
      return;
  }
  new Audio(`sounds/${faudio}.mp3`).play();
}

for (let i = 0; i < lenButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    playAudio(this.innerHTML);
  });
}

document.addEventListener('keydown', function(event){
  playAudio(event.key.toLowerCase());
});
// document.querySelector("button").addEventListener("click", () => handleClick("hai"));
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(greet) {
//   alert(`hello fsw 2 ${greet}`);
// }

// handleClick();

console.log(document.querySelectorAll("button")[3]);

let lenButton = document.querySelectorAll("button").length;

for (let i = 0; i < lenButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    // alert("hello fsw 2 dari button index " + i);
    // let audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // this.style.color = "blue";
    let faudio;
    switch (this.innerHTML) {
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
    }
    new Audio(`sounds/${faudio}.mp3`).play();
  });
}
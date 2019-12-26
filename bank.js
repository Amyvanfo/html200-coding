

function openApp() {
  var txt;
  var letter = prompt("Please enter your selection: Type W to withdraw, Type D to make a deposit, Type B to get your bank balance Type Q to quit the banking application", "");
  if (letter == null || letter == "") {
    txt = "User cancelled the prompt.";
  } else if (letter === 'D') {
    depositAction();
  } else if (letter === 'W') {
    withdraw();
  } else if (letter === 'B') {
    balance();
  } else if(letter === "Q"){
    quitApp();
  } else {
    txt = "Please choose a valid option";
    document.getElementById("demo").innerHTML = txt;
  }
}

function depositAction() {
      let input = prompt('add deposit amount')
      let result = 0;
      result = Number(input);
      alert(result + 1000)
    }
function withdraw() {
      let input = prompt('enter withdrawal amount')
      let result = 0;
      result = Number(input);
      alert(1000 - input)

}function getBalance() {
    alert('Your balance is $1000');
}
function quitApp() {
    document.getElementById("Quit").innerHTML = "Goodbye";
    prompt('enter Q to quit the application');
}

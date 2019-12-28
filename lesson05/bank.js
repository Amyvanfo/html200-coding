let balance = 10;

function openApp() {
var txt;
while (letter !== "Q"){

  var letter = prompt("Please enter your selection: Type W to withdraw, Type D to make a deposit, Type B to get your bank balance Type Q to quit the banking application", "");
  if (letter === null || letter === "") {
    txt = "User canceled the prompt.";{
    document.getElementById("demo").innerHTML = txt;
    break;
  }
  } else if (letter === 'D') {
    depositAction();
  } else if (letter === 'W') {
    withdraw();
  } else if (letter === 'B') {
    getBalance();
  } else if(letter === "Q"){
    quitApp();
    break;
  } else {
    txt = "Please choose a valid option";
    document.getElementById("demo").innerHTML = txt;
    break;
  }
}
}
function depositAction() {
      let input = prompt('add deposit amount')
      balance = Number(input) + balance;
      alert(balance)
    }
function withdraw() {
      let input = prompt('enter withdrawal amount')
      balance = balance - Number(input);
      alert(balance)

}function getBalance() {
    alert('your balance is $' + balance) ;
}
function quitApp() {
    document.getElementById("Quit").innerHTML = "Goodbye";
    }

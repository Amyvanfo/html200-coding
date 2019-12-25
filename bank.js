
//I know that I will need to loop through the 4 options, so this is some possible sytnax. I don't know how to get it to work with anything.
/*const runBanking = function(letter){
    if(letter === 'Q'){
    return true;
  }
};
  return('Q');*/
function hideElem() {
    document.getElementById("bankApp").style.visibility = "hidden";
  }
function showElem() {
      document.getElementById("bankApp").style.visibility = "visible";
  }

function bankAction() {
      document.getElementById("deposit").innerHTML = "Enter a deposit amount";
      let input = prompt('add deposit amount')
      let result = 0;
      result = Number(input);
      alert(result + 1000)
    }

function withdraw() {
  document.getElementById("withdraw").innerHTML = "Enter an amount to withdraw";
  let input = prompt('enter withdrawal amount')
  let result = 0;
  result = Number(input);
  alert(1000 - input)

}function getBalance() {
  document.getElementById("balance").innerHTML = 'BALANCE';
 alert('Your balance is $1000');
}
function quitApp() {
  document.getElementById("Quit").innerHTML = "Goodbye";
  prompt('enter Q to quit the application');
}
}

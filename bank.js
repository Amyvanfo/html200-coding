function bankAction() {
  document.getElementById("deposit").innerHTML = "Enter a deposit amount";
  let input = prompt('add deposit amount')
  let result = 0;
  result = Number(input);
  alert(result + 1000)

}function withdraw() {
  document.getElementById("withdraw").innerHTML = "Enter an amount to withdraw";
  /*let input = prompt('enter withdrawal amount')
  let result = 0;
  result = Number(input);
  alert(1000 - input)*/

}function getBalance() {
  document.getElementById("balance").innerHTML = "Your Balance is___";
}function quitApp() {
  document.getElementById("Quit").innerHTML = "Goodbye";
}

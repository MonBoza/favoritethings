function gatherInput(event) {
  event.preventDefault();
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const input3 = document.getElementById('input3').value;
  const input4 = document.getElementById('input4').value;
  const li1 = document.getElementById('li1');
  const li2 = document.getElementById('li2');
  const li3 = document.getElementById('li3');

  array = [input1, input2, input3, input4];
  document.getElementById("array").innerText = array;
  let newArray = [];
  newArray.push(array[1], array[0], array[2]); 
  li1.innerText = array[1]
  li2.innerText = array[0]
  li3.innerText = array[2]
}









window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", gatherInput)
  });
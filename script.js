let karambitEl = document.getElementById("bluegem");
let capsuleEl = document.getElementById("kato");
let czautoEl = document.getElementById("cz");
let dragloreEl = document.getElementById("dlore");
let percEl = document.getElementById("percent");
//  count variable Score
let score = 0;

document.getElementById("mark").addEventListener("click", btnPressed);

function btnPressed() {
  //question 1
  console.log(karambitEl.value);
  if (karambitEl.value == "387" || karambitEl.value == "442") {
    percEl.innerHTML = "1";
    score++;
    karambitEl.style.color = "green";
    karambitEl.style.border = "2px solid green";
  } else {
    karambitEl.style.color = "red";
    karambitEl.style.border = "2px solid red";
  }

  //question 2
  console.log(capsuleEl.value);
  if (capsuleEl.value == "kato" || capsuleEl.value == "kato14") {
    percEl.innerHTML = "2";
    score++;
    capsuleEl.style.color = "green";
    capsuleEl.style.border = "2px solid green";
  } else {
    capsuleEl.style.color = "red";
    capsuleEl.style.border = "2px solid red";
  }

  //question 3
  console.log(czautoEl.value);
  if (czautoEl.value == "100" || czautoEl.value == "50") {
    percEl.innerHTML = "3";
    score++;
    czautoEl.style.color = "green";
    czautoEl.style.border = "2px solid green";
  } else {
    czautoEl.style.color = "red";
    czautoEl.style.border = "2px solid red";
  }

  //question 4
  console.log(dragloreEl.value);
  if (dragloreEl.value == "12000" || dragloreEl.value == "500000") {
    percEl.innerHTML = "4";
    score++;
    dragloreEl.style.border = "2px solid green";
    dragloreEl.style.color = "green";
  } else {
    dragloreEl.style.border = "2px solid red";
    dragloreEl.style.color = "red";
  }
  document.getElementById("percent");
  // using the innerHTML command, show the score number where the dashes are
}

// "387"  string, 387 number

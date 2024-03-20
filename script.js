async function qoutes() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();
  qoute.innerText = data.content + " - " + data.author;
}

function start() {
  qoutes();
  setInterval(qoutes, 5500);
  let startBtnHide = (document.getElementById("thenHide").style.display =
    "none");
}

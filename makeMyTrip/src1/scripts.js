console.log("java script works");

function oneway() {
  console.log("oneway");
}
function evntreg() {
  document.getElementById("oneway").addEventListener("onclick", oneway, false);
}
window.addEventListener("onload", evntreg, true);

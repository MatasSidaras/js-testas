/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  
var clickCount = 0; 
  
 
function handleClick() {
    clickCount++; 
    updateState(); 
}
  
   
function updateState() {
    var stateElement = document.getElementById('btn__state');
    stateElement.textContent = clickCount; 
}
  
   
document.getElementById('btn__element').addEventListener('click', handleClick);
});
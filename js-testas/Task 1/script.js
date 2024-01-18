/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const input = document.querySelector('#search');
  const output = document.querySelector('#output');
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const weight = parseFloat(input.value);
 
    if (isNaN(weight)) {
      alert('Ivestas neteisingas reikšmė.');
      return;
    }
 
    const lb = (weight * 2.2046).toFixed(2);
    const g = (weight / 0.0010000).toFixed(2);
    const oz = (weight * 35.274).toFixed(2);
 
    output.innerHTML = `
      <h2>Results:</h2>
      <p>Pounds (lb): ${lb}</p>
      <p>Grams (g): ${g}</p>
      <p>Ounces (oz): ${oz}</p>
    `;
  });
 });
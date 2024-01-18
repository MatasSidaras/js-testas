/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.getElementById('output');

const createCard = (brand, models) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h2>${brand}</h2>
    <p>Models:</p>
    <ul>
      ${models.map(model => `<li>${model}</li>`).join('')}
    </ul>
  `;

  return card;
};

const displayCars = async () => {
  try {
    const response = await fetch('cars.json');
    const data = await response.json();

    data.forEach(item => {
      const card = createCard(item.brand, item.models);
      output.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

displayCars();
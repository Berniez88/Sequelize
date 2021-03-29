/*import DiningHall from '../models/DiningHall';*/

/*async function getData() {
  const response = await fetch('/api/dining');
  const alpha = await response.json();
  const dining = alpha.data;
  return dining;
}


function diningHall() {
  const bravo = document.querySelector('.target');
  dining.forEach((element) => {
    const charlie = document.createElement("tr");
    charlie.innerHTML = `
    <td>${element.hall_id}</td>
    <td>${element.hall_name}</td>
    <td>${element.hall_address} </td>`;
    
    bravo.append(charlie)
  });

}

async function windowActions(){
  const alpha = diningHall();
  await getData(alpha)
}

window.onload = windowActions(); */


async function dinner () {
    const dinnerFetch = await fetch('/api/dining');
    const dinnerInfo = await dinnerFetch.json();
    const arrayDinner = dinnerInfo.data; 
    const information = document.querySelector('.target');
  
    arrayDinner.forEach((x) => {
        const makeRows = document.createElement('tr');
        makeRows.innerHTML = `
                <td>${x.hall_id}</td>
                <td>${x.hall_name}</td>
                <td>${x.hall_address}</td>   
        `;
        information.append(makeRows)
    });
  }
  
  window.onload = dinner();
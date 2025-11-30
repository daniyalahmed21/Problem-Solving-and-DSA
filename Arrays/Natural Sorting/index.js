const input = [
  "99 Main Road",
  "8 main street",
  "340 First Street",
  "1 Main Street",
  "555 Taraval Road",
  "12 MAIN STREET",
  "555 California Street",
  "457 California Street South",
];

function NaturalSorting(input) {
  let newAddresses = [];

  input.map((elem) => {
    let firstSpace = elem.indexOf(" ");
    let streetName = elem.slice(firstSpace + 1).trim(); 
    let streetNumber = Number(elem.slice(0, firstSpace));
    newAddresses.push({ streetNumber, streetName });
  });

  newAddresses.sort((a, b) => {
    const nameA = a.streetName.toUpperCase();
    const nameB = b.streetName.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    // names are equal → sort by number
    return a.streetNumber - b.streetNumber;
  });

  return newAddresses.map((x) => x.streetNumber + " " + x.streetName);
}

console.log(NaturalSorting(input));

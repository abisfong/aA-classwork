
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let el = document.createElement('p')
  el.append(string);
  htmlElement.appendChild(el);
};

htmlGenerator('Party Time.', partyHeader);
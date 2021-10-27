
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  let dogLinks = [];
  for (let key in dogs) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", dogs[key]);
    a.innerHTML = key; //content of elt
    li.classList.set("dog-link"); //all have class
    li.appendChild(a);
    dogLinks.push(li);
  }
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  document.querySelector(".drop-down-dog-list").append(dogLinks); // append eahc child instead
}

export {attachDogLinks}
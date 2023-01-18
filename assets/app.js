import fs from 'fs';

function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
};


let currentIdx = 0

let items = document.getElementById('storage').children

function updateCurrent() {
	const toBeCurrent = items[currentIdx].cloneNode(true)
	toBeCurrent.setAttribute('id', 'current')

	document.getElementById('current').replaceWith(toBeCurrent)
}

function previous() {
	currentIdx = currentIdx == 0 ? items.length - 1 : currentIdx - 1
	updateCurrent()
}

function next() {
	currentIdx = currentIdx == items.length - 1 ? 0 : currentIdx + 1
	updateCurrent()
}

for (const [idx, image] of [...items].entries()) {
	image.onclick = function () {
		currentIdx = idx
		updateCurrent()
	}
}

updateCurrent()

let data;
let file = "../assets/adatok.txt";
fs.readFileSync = file;
const element = getElementById(submit);
element.addEventListener('click',saveFile);

  let saveFile = () =>{
    const name = getElementById('name');
    const email = getElementById('email');
    
    data ='Név : ' + name + ',/n' +'E-mail cím: ' + email + ',/n'
    data.toString();
    fs.writeFileSync("adatok.txt",data);
  };



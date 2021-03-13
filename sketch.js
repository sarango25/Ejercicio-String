let texts;
let words = [];
let palabritas = [];
function preload(){
  texts = loadStrings('./assets/strings.txt');
}

function setup() {
  createCanvas(400, 400);

  for (let index = 0; index < texts.length; index++) {
    let arrayWords = texts[index].split(' '); 
    for (let index = 0; index < arrayWords.length; index++) {
      words.push(arrayWords[index]);
    }
  }
  
  for(let index = 0; index < words.length; index ++){
    palabritas.push(new clasePalabra(words[index],random(20,380),random(20,380)));
  }
}

function draw() {
  background(220);
 
  
  for(let i = 0; i < palabritas.length; i ++){
    text(palabritas[i].getPalabra(),palabritas[i].getPosX(),palabritas[i].getPosY());
  }

}


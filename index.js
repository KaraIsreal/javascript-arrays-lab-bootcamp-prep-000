// Add your functions and code here
function kittens(array){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens
}

function destructivelyAppendKitten(name, element){
kittens.push(Ralph)
return kittens
}

function destructivelyPrependKitten(name, element){
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name, element){
return [...kittens, element];
}

function prependKitten(name, element){
  return [element, ...kittens]
}

function removeLastKitten(){
kittens.slice(0, kittens.length -1);
  return kittens
}

function removeFirstKitten(){
kittens= kittens.slice(1)
  return kittens
}

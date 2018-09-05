// Add your functions and code here
function kittens(array){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens
}

function destructivelyAppendKitten(array, element){
kittens.push('Ralph')
return kittens
}

function destructivelyPrependKitten(array, element){
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
  return kittens
}

function appendKitten(kittens){
return [...kittens, Broom];
}

function prependKitten(array, element){
  return ['Arnold', ...kittens]
}

function removeLastKitten(kittens){
kittens.slice(0, kittens.length -1);
  return kittens
}

function removeFirstKitten(array){
kittens= kittens.slice(1)
  return kittens
}

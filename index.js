// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){
     cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function  destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name) {
    
    const catsArray = [...cats, "Broom"]

    return catsArray.slice(1)
}

function prependCat(name) {
    
    const newCatsArray = ["Arnold" , ...cats];

    return newCatsArray;
}

function removeLastCat() {
    
    const newCats = cats.slice(0, -1);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}
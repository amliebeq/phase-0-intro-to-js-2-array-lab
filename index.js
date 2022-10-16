// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()   
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push(name)
    return(copyOfCats)
}
function prependCat(name) {
    const copyOfCatsI = cats.slice()
    copyOfCatsI.unshift(name)
    return(copyOfCatsI)
}
function removeLastCat() {
    const removeCats = cats.slice()
    removeCats.pop()
    return(removeCats)
}
function removeFirstCat() {
    const removeMoreCats = cats.slice()
    removeMoreCats.shift()
    return removeMoreCats
}
// School Counter
function increment() {
    let count = document.getElementById("count-el").innerHTML
    count++
    document.getElementById("count-el").innerHTML = count
}

function decrement() {
    let count = document.getElementById("count-el").innerHTML
    if (count > 0) {
        count--
    }
    document.getElementById("count-el").innerHTML = count
}

function save() {
    let count = document.getElementById("count-el").innerHTML
    let countStr = count + "-"
    document.getElementById("save-el").innerHTML += countStr
}

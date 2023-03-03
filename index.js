// document.getElementById("count-el").innerText = 5


// change count-el in the HTML to reflet the count

// camelCase

let count = 0

function increment(){
    count += 1;
    document.getElementById("count-el").textContent = count
    console.log(count);
}

function save(){
    document.getElementById("save-el").textContent += count+" - "
    count = 0
    console.log(count);
    document.getElementById("count-el").textContent = count
}

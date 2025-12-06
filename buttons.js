/* Block comment */
// Single line comment
// Showing that the JS is being loaded
console.log("Hello");

function logPress() {
    console.log("Good job!");
    console.log("You clicked a button!");
}
function showAlert() {
    alert("Hello user!");
}

//Make new function toogledark
// log "toggleDark called"
function toggleDark() {
    console.log("toggleDark called");
    document.body.classList.toggle("dark-mode");
}

function wackyEffects(){
    console.log("worked")
    document.getElementById("instructions").classList.toggle("flipped")
    document.getElementById("pageTitle").innerHTML = "Something Wacky happened"
}
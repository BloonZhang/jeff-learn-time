// function helloWorld(){
//     alert("hello, banks")
// }
// helloWorld()

/*
document (technically window.document) always exist
*/

/*
loosely typed:
let = does not exist outside of scope. less memory? who knows
var = normal variable, also does not exist outside of scope
const = can be changed, but gives a warning
*/

/*
const button = document.getElementById("buttonBro")
let textBox = document.getElementById("textyBoy")
button.addEventListener("click", setTextFromPage) //Note: event listeners will always pass in event
textBox.addEventListener("keyup", setTextFromPage)
*/

let XDisplay = document.getElementById("X")
let YDisplay = document.getElementById("Y")

// Anonymouse function syntax. But not hoisted, so it has to be declared above
let trackMouse = (e)=>{
    /*
    XDisplay.innerHTML = "X: " + e.screenX;
    YDisplay.innerHTML = "Y: " + e.screenY;
    */
    XDisplay.innerHTML = `X: ${e.screenX}` // Cool kids do strnigs like this
    YDisplay.innerHTML = `Y: ${e.screenY}` // This is useful in case you want your string to be like, <p> something </p>

}
window.addEventListener("mousemove", trackMouse) //Note: dangerous style

/*
function setTextFromPage(e){
    //console.log(e) //Prints out info about the event
    //let mainText = document.getElementById("mainText")
    // console.log(mainText) Prints <h1 id="mainText">sup</h1>
    //mainText.innerHTML = "durf" // Note: vanilla js. Almost never used

    let mainText = document.getElementById("mainText")
    mainText.innerHTML = textBox.value;
}
*/

//setTextFromPage() //Note: if script comes on top, html will replace
//setTimeout(setTextFromPage, 5000) //This sets it to durf after 5 seconds


/* behind the scenes?
let window = {addEventListener: function() }
window.addEventListener()

if you want to define your own thing
window.intX = 1
*/
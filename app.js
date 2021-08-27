var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#textarea-input')
console.log(txtInput)

//console.log(btnTranslate)

function clickEventHandler(){
    console.log("Clicked!")
    console.log("input ", txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler)


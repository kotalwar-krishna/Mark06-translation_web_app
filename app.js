var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#textarea-input')
var outputDiv = document.querySelector("#output")

//outputDiv.innerText = "Krishna Kotalwar"

//console.log(txtInput)

//console.log(btnTranslate)
//"input[name = 'translator']"

function clickEventHandler(){
    //console.log("Clicked!")
    //console.log("input ", txtInput.value)

    outputDiv.innerText = "you written: " + txtInput.value
}

btnTranslate.addEventListener("click", clickEventHandler)


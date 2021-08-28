var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#textarea-input')
var outputDiv = document.querySelector("#output")

//outputDiv.innerText = "Krishna Kotalwar"

//console.log(txtInput)

//console.log(btnTranslate)
//"input[name = 'translator']"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(){
    console.log("error occoured",error)
    alert("something wrong with server")
}



function clickEventHandler(){
    //console.log("Clicked!")
    //console.log("input ", txtInput.value)

    //outputDiv.innerText = "you written: " + txtInput.value

    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {var translatedText = json.contents.translated
    outputDiv.innerText = translatedText })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickEventHandler)


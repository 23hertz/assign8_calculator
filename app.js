const btnEl = document.querySelectorAll("button")
const inputFieldEl = document.querySelector("#result")

for(let i = 0; i < btnEl.length; i++)
{
    btnEl[i].addEventListener("click", ()=>{
        const btnValue = btnEl[i].textContent
        if(btnValue === "C"){
            clearResult()
        }
        else if(btnValue === "="){
            calculateResult()
            
        }
        else{
            appendValue(btnValue)
        }
        
    })
}

function clearResult()
{
    inputFieldEl.value = ""
}

function calculateResult()
{
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue
}
// //     let isAdditionOperationClicked = false;
// //     let isSubtractOperationClicked = false
// //     let additionOperationValues = []

// //         function showButtonValue(buttonValue){
        
// //         const screen = document.querySelector(".screen");
// //         if(screen.textContent === "0" || isAdditionOperationClicked){
// //             screen.textContent = buttonValue
// //             isAdditionOperationClicked = false;
// //             isSubtractOperationClicked = false
// //         }else{
// //             screen.textContent += "" + buttonValue;
// //         }
// //         additionOperationValues.push(screen.textContent)
// //      } 
 

// //     function clearScreen(){
// //         const screen = document.querySelector(".screen");
// //         screen.textContent = "0";
// //         additionOperationValues = []
// //      }

// //      function additionOperation(){
// //         const screen = document.querySelector(".screen")
// //         screen.textContent = screen.textContent;
// //         isAdditionOperationClicked = true;
// //         // const value = parseInt(screen.textContent)  
// //         // additionOperationValues.push(value)
// //      }

// //      function subtractOperation(){
// //         const screen = document.querySelector(".screeen")
// //         screen.textContent = screen.textContent;

// //      }


// //      function equalOperation(){
// //          const screen = document.querySelector(".screen")
// //          if(!additionOperationValues.length){
// //             return
// //          }
// //          let total = 0
// //          for(let i = 0; i < additionOperationValues.length;i++){
// //             total += Number(additionOperationValues[i])
// //          }
// //           screen.textContent = total
// //      }
 
// //      function generateButtons(){
// //     const controls = document.querySelector("#controls");
// //      const totlaButton = 10;

// //          for(let i = 0; i < totlaButton; i++){
// //         const button = document.createElement("button");
// //         button.textContent = String(i)
// //         button.onclick = () => showButtonValue(button.textContent) 
// //         controls.appendChild(button)
// //      }


// //       const additionbutton = document.createElement("button")
// //       additionbutton.textContent = "+"
// //       additionbutton.onclick = () => additionOperation()
// //       controls.appendChild(additionbutton);

// //       const subtractButton = document.createElement("button")
// //       subtractButton.textContent = "-"
// //       subtractButton.onclick = () => subtractOperation()
// //       controls.appendChild(subtractButton)

// //      const equalbutton = document.createElement("button")
// //      equalbutton.textContent = "="
// //      equalbutton.onclick = () => equalOperation()
// //      controls.appendChild(equalbutton);

// // }

// // document.addEventListener('DOMContentLoaded', () => {
// //     generateButtons()
// // })

 
//     let isAdditionOperationClicked = false;
//     let isSubtractOperationClicked = false
//     let operation = []
//     let currentValue = ""
//     // let operators = ["+",""]

//         function showButtonValue(buttonValue){
        
//         const screen = document.querySelector(".screen");
//         if(screen.textContent === "0"){
//             screen.textContent = buttonValue
//         }else{
//             screen.textContent + buttonValue;
//             // if(isAdditionOperationClicked == true){
//             //     screen.textContent += "" + buttonValue;
//             // }
//         }
//         // additionOperationValues.push(screen.textContent)
//         currentValue += buttonValue;
//      } 
 

//     function clearScreen(){
//         const screen = document.querySelector(".screen");
//         screen.textContent = "0";
//         currentValue = ""
//         // additionOperationValues = []
//      }

//      function additionOperation(){
//         if(currentValue == "")return;
//         operation.push(Number(currentValue))
//         operation.push("+")
//         currentValue = ""

//         const screen = document.querySelector(".screen")
//         screen.textContent += "+";

//         // const value = parseInt(screen.textContent)  
//         // additionOperationValues.push(value)
//      }

//      function subtractOperation(){
//          if(currentValue == "")return;
//         operation.push(Number(currentValue))
//         operation.push("-")
//         currentValue = ""

//         const screen = document.querySelector(".screen")
//         screen.textContent += "-";

//      }


//      function equalOperation(){
//          const screen = document.querySelector(".screen")
//          if(currentValue == ""){
//             operation.push(Number.currentValue)
//          }
//          let total = operation[0]
//          for(let i = 0; i < ope.length;i++){
//             total += Number(additionOperationValues[i])
//          }
//           screen.textContent = total
//      }
 
//      function generateButtons(){
//         const controls = document.querySelector("#controls");
//         const totlaButton = 10;

//          for(let i = 0; i < totlaButton; i++){
//         const button = document.createElement("button");
//         button.textContent = String(i)
//         button.onclick = () => showButtonValue(button.textContent) 
//         controls.appendChild(button)
//      }


//       const additionbutton = document.createElement("button")
//       additionbutton.textContent = "+"
//       additionbutton.onclick = () => additionOperation()
//       controls.appendChild(additionbutton);

//       const subtractButton = document.createElement("button")
//       subtractButton.textContent = "-"
//       subtractButton.onclick = () => subtractOperation()
//       controls.appendChild(subtractButton)

//      const equalbutton = document.createElement("button")
//      equalbutton.textContent = "="
//      equalbutton.onclick = () => equalOperation()
//      controls.appendChild(equalbutton);

// }

// document.addEventListener('DOMContentLoaded', () => {
//     generateButtons()
// })

 let currentValue = "";
let expression = [];

// Show button value
function showButtonValue(buttonValue) {
    const screen = document.querySelector(".screen");

    // If current value is "0", reset it
    if (screen.textContent === "0") {
        screen.textContent = buttonValue;
    } else {
        screen.textContent += buttonValue;
    }

    currentValue += buttonValue;
}

// Clear screen
function clearScreen() {
    const screen = document.querySelector(".screen");
    screen.textContent = "0";
    currentValue = "";
    expression = [];
}

// Handle addition
function additionOperation() {
    if (currentValue === "") return;
    expression.push(Number(currentValue));
    expression.push("+");
    currentValue = "";

    const screen = document.querySelector(".screen");
    screen.textContent += " + ";
}

// Handle subtraction
function subtractOperation() {
    if (currentValue === "") return;
    expression.push(Number(currentValue));
    expression.push("-");
    currentValue = "";

    const screen = document.querySelector(".screen");
    screen.textContent += " - ";
}

// Equal operation
function equalOperation() {
    if (currentValue !== "") {
        expression.push(Number(currentValue));
    }

    let total = expression[0];
    for (let i = 1; i < expression.length; i += 2) {
        const operator = expression[i];
        const nextNumber = expression[i + 1];

        if (operator === "+") {
            total += nextNumber;
        } else if (operator === "-") {
            total -= nextNumber;
        }
    }

    const screen = document.querySelector(".screen");
    screen.textContent = total;

    // Reset values
    currentValue = "";
    expression = [];
}

// Generate buttons
function generateButtons() {
    const controls = document.querySelector("#controls");

    for (let i = 0; i < 10; i++) {
         const button = document.createElement("button");
        button.textContent = String(i);
        button.onclick = () => showButtonValue(button.textContent);
        controls.appendChild(button);
    }

    const additionButton = document.createElement("button");
    additionButton.textContent = "+";
    additionButton.onclick = () => additionOperation();
    controls.appendChild(additionButton);

    const subtractButton = document.createElement("button");
    subtractButton.textContent = "-";
    subtractButton.onclick = () => subtractOperation();
    controls.appendChild(subtractButton);

    const equalButton = document.createElement("button");
    equalButton.textContent = "=";
    equalButton.onclick = () => equalOperation();
    controls.appendChild(equalButton);

    const clearButton = document.createElement("button");
    clearButton.textContent = "C";
    clearButton.onclick = () => clearScreen();
    controls.appendChild(clearButton);
}

document.addEventListener("DOMContentLoaded", generateButtons);

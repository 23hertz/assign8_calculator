//     let isAdditionOperationClicked = false;
//     let isSubtractOperationClicked = false
//     let additionOperationValues = []

//         function showButtonValue(buttonValue){
        
//         const screen = document.querySelector(".screen");
//         if(screen.textContent === "0" || isAdditionOperationClicked){
//             screen.textContent = buttonValue
//             isAdditionOperationClicked = false;
//             isSubtractOperationClicked = false
//         }else{
//             screen.textContent += "" + buttonValue;
//         }
//         additionOperationValues.push(screen.textContent)
//      } 
 

//     function clearScreen(){
//         const screen = document.querySelector(".screen");
//         screen.textContent = "0";
//         additionOperationValues = []
//      }

//      function additionOperation(){
//         const screen = document.querySelector(".screen")
//         screen.textContent = screen.textContent;
//         isAdditionOperationClicked = true;
//         // const value = parseInt(screen.textContent)  
//         // additionOperationValues.push(value)
//      }

//      function subtractOperation(){
//         const screen = document.querySelector(".screeen")
//         screen.textContent = screen.textContent;

//      }


//      function equalOperation(){
//          const screen = document.querySelector(".screen")
//          if(!additionOperationValues.length){
//             return
//          }
//          let total = 0
//          for(let i = 0; i < additionOperationValues.length;i++){
//             total += Number(additionOperationValues[i])
//          }
//           screen.textContent = total
//      }
 
//      function generateButtons(){
//     const controls = document.querySelector("#controls");
//      const totlaButton = 10;

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

 
    let isAdditionOperationClicked = false;
    let isSubtractOperationClicked = false
    let additionOperationValues = []
    // let operators = ["+",""]

        function showButtonValue(buttonValue){
        
        const screen = document.querySelector(".screen");
        if(screen.textContent === "0" || isAdditionOperationClicked || isSubtractOperationClicked){
            screen.textContent = buttonValue
            isAdditionOperationClicked = false;
            isSubtractOperationClicked = false
        }else{
            // screen.textContent += "" + buttonValue;
            if(isAdditionOperationClicked == true){
                screen.textContent += "" + buttonValue;
            }
            else{ 
                screen.textContent -= "" + buttonValue;
            }
        }
        additionOperationValues.push(screen.textContent)
     } 
 

    function clearScreen(){
        const screen = document.querySelector(".screen");
        screen.textContent = "0";
        additionOperationValues = []
     }

     function additionOperation(){
        const screen = document.querySelector(".screen")
        screen.textContent = screen.textContent;
        isAdditionOperationClicked = true;
        // const value = parseInt(screen.textContent)  
        // additionOperationValues.push(value)
     }

    //  function checkOperator(expression)

     function subtractOperation(){
        const screen = document.querySelector(".screeen")
        screen.textContent = screen.textContent;

     }


     function equalOperation(){
         const screen = document.querySelector(".screen")
         if(!additionOperationValues.length){
            return
         }
         let total = 0
         for(let i = 0; i < additionOperationValues.length;i++){
            total += Number(additionOperationValues[i])
         }
          screen.textContent = total
     }
 
     function generateButtons(){
        const controls = document.querySelector("#controls");
        const totlaButton = 10;

         for(let i = 0; i < totlaButton; i++){
        const button = document.createElement("button");
        button.textContent = String(i)
        button.onclick = () => showButtonValue(button.textContent) 
        controls.appendChild(button)
     }


      const additionbutton = document.createElement("button")
      additionbutton.textContent = "+"
      additionbutton.onclick = () => additionOperation()
      controls.appendChild(additionbutton);

      const subtractButton = document.createElement("button")
      subtractButton.textContent = "-"
      subtractButton.onclick = () => subtractOperation()
      controls.appendChild(subtractButton)

     const equalbutton = document.createElement("button")
     equalbutton.textContent = "="
     equalbutton.onclick = () => equalOperation()
     controls.appendChild(equalbutton);

}

document.addEventListener('DOMContentLoaded', () => {
    generateButtons()
})

 
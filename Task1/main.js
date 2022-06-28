var display = document.getElementById("display");
let buttons = document.querySelectorAll("#button");
// let disval = "";
let string = "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let element = e.target.innerHTML;
        if (element == "C") {
            string = "0";
            display.innerHTML = string;
        }
        else if (element == "=") {
            string = eval(string);
            display.innerHTML = string;
        }
        else{
            if (display.innerHTML == "0") {
                string = element;
                display.innerHTML = string;
            }
            else{
                string = string + element;
                display.innerHTML = string;
            }
            
        }
    })
})

function clicked(){
    console.log("clicked")
}


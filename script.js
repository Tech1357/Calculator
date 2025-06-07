const calscreen=document.querySelector(".calculate");
const resscreen=document.querySelector(".res");

//variable to store the calculated value
let calculatevalue= "";

//array of valid operators
const operators=["%","/","-","*","+"];

//function is called when a number is pressed
function tapNum(numvalue){
    //prevent a decimal string to be added when the calculation string is empty
    if (calculatevalue=="" && numvalue=="."){
        return;
    }
    //prevent consecutive decimal points from being added
    if (calculatevalue.at(-1)=="." && numvalue=="."){
        return;
    }
    //add the number to the calculation screen
    addCalculateScreen(numvalue);
}

//function called when operator is presses
function tapOperator(opvalue){

    //do not allow to add an operator when the calculated value is empty
    if (calculatevalue=="") return;
    //prevent consecutive operators from being added
    if (operators.some(operator => calculatevalue.at(-1)== operator)){
        return;
    }
    //if there is a previous result and it's not an error use that result as the sarting value for the next calculation
    if (resscreen.textContent != "" && resscreen.textContent != "Error") {
        calculatevalue = resscreen.textContent;
        resscreen.textContent = " ";
    }
    addCalculateScreen(opvalue);
}

//function called when clear(AC) button is pressed
function tapClear(){
    //clear the calculation value
    calculatevalue="";
    //reset the calculation and result screen
    calscreen.textContent=calculatevalue;
    resscreen.textContent="";
}

//function called when delete(DEL) button is pressed
function tapDelete(){
    //remove the last character from calculation string
    calculatevalue=calculatevalue.slice(0,-1);
    //clear the result screen
    resscreen.textContent="";
    //update the calculation screen
    calscreen.textContent=calculatevalue;
}

//function called when euals(=) button is pressed
function tapResult(){
    try{
        resscreen.textContent=eval(calculatevalue);
    }
    catch(e){
        resscreen.textContent='Error';
    }
}

//function to add the value to the calculated screen
function addCalculateScreen(val){
    //append the value to the calculated screen
    calculatevalue+=val;
    //update the calculation screen display
    calscreen.textContent=calculatevalue;
}

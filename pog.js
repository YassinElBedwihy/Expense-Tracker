
//in the making
let date = document.getElementById('date'); // 
let nam = document.getElementById('name'); //   these are all normal inputs
let amount = document.getElementById('amount'); //

let table = document.getElementById('tabli')



function getVal(){
    let newdate = date.value;
    let newname = nam.value;
    let newamount = amount.value;
    
    if(!newdate || !newname || !newamount) return null;
    if(isNaN(newamount)) return null;
    if(!isNaN(newname)) return null;
    
    return [newdate, newname, newamount]
}

function onclic(x){
        table.deleteRow(x);
}

function updateTable([data, num, amount]){

    let row = table.insertRow(1);
    let celld = document.createElement("td");
    let celln = document.createElement("td");
    let cella = document.createElement("td");
    let cellb = document.createElement("td");

    celld.innerHTML = data;
    celln.innerHTML = num;
    cella.innerHTML = amount;

    row.append(celld, celln, cella, cellb)
    
    let button = document.createElement("input")

    button.type = "button";
    button.value = "Delete";
    button.id = 1;
    button.className = "deletebuttons"

    cellb.append(button);
    button.addEventListener("click", () => {
        let id = button.id;
        onclic(button.id)

        Array.from(document.getElementsByClassName('deletebuttons')).forEach(button => {

          if(button.id > id){
          button.id--
     
        }}) 
    })
}


let input = document.getElementById('inputbutton');

input.addEventListener("click", () => {

    Array.from(document.getElementsByClassName('deletebuttons')).forEach(button => button.id++)

    let arr = getVal();
    if(getVal() === null){
        alert('invalid info input')
        return;
    }else {
        updateTable(arr);
        Array.from(document.getElementsByClassName("addexpense")).forEach(elem => elem.value = "")
    }
})
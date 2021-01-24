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

function updateTable([d, n, a]){

   

    let row = table.insertRow(1);
    let celld = row.insertCell(0);
    let celln = row.insertCell(1);
    let cella = row.insertCell(2);
    let cellb = row.insertCell(3);
    celld.innerHTML = d;
    celln.innerHTML = n;
    cella.innerHTML = a;

    
    let button = document.createElement("input")

    button.type = "button";
    button.value = "x";
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
        Array.from(document.getElementsByClassName("addexpense"), elem => elem.value = "")
    }
})
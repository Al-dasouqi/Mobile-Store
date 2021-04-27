'use-strict';

//create an empty array:
let users = [];

//create random function for the price :

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function condition(){
      if (this.price < 200){
          console.log("used");
        //   document.write();
      }
      else{
          console.log("new");
      }
  }

//create a constructor function for the dynamic values :

function User (name , type){
    this.name  = name;
    this.type  = type;
    this.price = random(100,500);
    this.condition = condition();
    users.push(this); 
    settingItems();
}

//Local Storage :

function settingItems(){
    let stringOb = JSON.stringify(users);
    localStorage.setItem('users',stringOb);
}

//Rendering data from the form as a table :

let table = document.getElementById('table');
User.prototype.render = function(){
    for(let i=0; i<users.length; i++){
        let tableRow   = document.createElement('tr');
        let tableData1 = document.createElement('td');
        let tableData2 = document.createElement('td');
        let tableData3 = document.createElement('td');
        let tableData4 = document.createElement('td');


        tableData1.textContent = users[i].name;
        tableRow.appendChild(tableData1);

        tableData2.textContent = users[i].type;
        tableRow.appendChild(tableData2);

        tableData3.textContent = users[i].price;
        tableRow.appendChild(tableData3);

        tableData4.textContent = users[i].condition;
        tableRow.appendChild(tableData4);

        table.appendChild(tableRow);
    }
}

//Form :
let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event){
    event.preventDefault();

    let userName = event.target.name.value;
    let type     = event.target.type.value;

    let newOb = new User(userName,type);
    console.log(newOb);

    //calling the render fun
    newOb.render();
}

//gettingItems :

function gettingItems(){
    let data = localStorage.getItem('user');
    console.log(data);

    let parsedOb = JSON.parse(data);
    console.log(parsedOb);

    if(parsedOb){
        for(let i =0 ; i<parsedOb[i] ; i++){
            new User(parsedOb[i].name,parsedOb[i].type);
        }
    }
}

//calling gettingItems fun :
gettingItems();

console.log(users);

for(let i = 0 ; i < 1 ; i++){
    users[i].render();
}


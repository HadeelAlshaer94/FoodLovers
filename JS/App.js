'use strict'

let form = document.getElementById('form');
let table = document.getElementById('table');

// Constructor Function 
function FoodLove(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;

    FoodLove.allfoods.push(this);
}

FoodLove.allfoods = [];

// Get Random Integer Function "W3school"
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Add Event Listener For Submit Button in Form
form.addEventListener('submit', submissions)
function submissions(event) {
    let name = event.target.name.value;
    let type = event.target.type.value;
    let price = getRndInteger(1, 100);

    let newFoodLove = new FoodLove(name, type, price);

    saveToLocalStorage();
}

// Save into Local Storage Function
function saveToLocalStorage() {
    let stringArray = JSON.stringify(FoodLove.allfoods);
    localStorage.setItem('Foods', stringArray);
}

// Render Function for Table
function render() {
    for (let j = 0; j < FoodLove.allfoods.length; j++) {
        let tr = document.createElement('tr');
        let tdname = document.createElement('td');
        let tdtype = document.createElement('td');
        let tdprice = document.createElement('td');

        table.appendChild(tr);
        tr.appendChild(tdname);
        tr.appendChild(tdtype);
        tr.appendChild(tdprice);

        tdname.textContent = FoodLove.allfoods[j].name;
        tdtype.textContent = FoodLove.allfoods[j].type;
        tdprice.textContent = FoodLove.allfoods[j].price;
    }
}


// Get Store Data Function 
function getStoreData() {
let dataArr = JSON.parse(localStorage.getItem('Foods'));
    if (dataArr !== null) {
        for (let j = 0; j < dataArr.length; j++) {

            FoodLove.allfoods = dataArr;
            render();
        }
    }
console.log('this', dataArr);

}

getStoreData();
class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }

   
    getDescription() {
        return `${this.year} ${this.make} ${this.model} - $${this.price}`;
    }
}


class CarDealership {
    constructor() {
        this.cars = [];
    }

    
    addCar(car) {
        this.cars.push(car);
        this.displayCars();
    }

    
    removeCar(index) {
        this.cars.splice(index, 1);
        this.displayCars();
    }

    
    displayCars() {
        const carList = document.getElementById('carList');
        carList.innerHTML = '';

        this.cars.forEach((car, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${car.getDescription()}
                <button onclick="dealership.removeCar(${index})">Remove</button>
            `;
            carList.appendChild(li);
        });
    }
}


const dealership = new CarDealership();


function addCar() {
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    if (make && model && year && price) {
        const car = new Car(make, model, parseInt(year), parseFloat(price));
        dealership.addCar(car);

        
        document.getElementById('make').value = '';
        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('price').value = '';
    } else {
        alert('Please fill out all fields!');
    }
}


document.getElementById('addCarBtn').addEventListener('click', addCar);

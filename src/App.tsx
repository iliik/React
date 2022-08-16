import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {TopCar} from "./TopCars/TopCar";


function App() {

    const topCar = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mersedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    let [students, setStudents] = useState(
        [
            {id: 1, name: "Janes", age: 8},
            {id: 2, name: "Ola", age: 16},
            {id: 3, name: "Ilya", age: 22},
            {id: 4, name: "Angelina", age: 32},
            {id: 5, name: "Georgi", age: 39},
            {id: 6, name: "Sasha", age: 43},
            {id: 7, name: "Macsim", age: 50},
            {id: 8, name: "Taison", age: 59},
            {id: 8, name: "Liza", age: 61},
            {id: 10, name: "Ivan", age: 69},
        ]
    )
    return (
        <div>
            <NewComponent students={students}/>
            <TopCar topCar={topCar}/>
        </div>
    );
}

export default App;

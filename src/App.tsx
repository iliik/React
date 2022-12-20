import React from 'react';
import './App.css';

import {Off} from "./OnOff/On";
import {message} from "antd";
import {Clock} from "./clock/Clock";

// type Props = {
//     on: boolean
//     onChange:(on:boolean)=> void
// }
//
// function StartTime() {
//     return null;
// }

function App() {
    // let [message, setMessage] = useState([
    //     {message: 'message1'},
    //     {message: 'message2'},
    //     {message: 'message3'}
    // ])
    //
    // let [title, setTitle] = useState('')
    //
    // const addMessage = (title: string) => {
    //     let newMessage = {message: title}
    //     setMessage([newMessage, ...message])
    // }
    //
    // const callBackButtonHandler = () => {
    //     addMessage(title)
    //     setTitle('')
    // }


    return (
        <div className={'App'}>
            <Clock/>

        </div>
    )
}


//
// const topCar = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mersedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]
//
//
// let [students, setStudents] = useState(
//     [
//         {id: 1, name: "Janes", age: 8},
//         {id: 2, name: "Ola", age: 16},
//         {id: 3, name: "Ilya", age: 22},
//         {id: 4, name: "Angelina", age: 32},
//         {id: 5, name: "Georgi", age: 39},
//         {id: 6, name: "Sasha", age: 43},
//         {id: 7, name: "Macsim", age: 50},
//         {id: 8, name: "Taison", age: 59},
//         {id: 8, name: "Liza", age: 61},
//         {id: 10, name: "Ivan", age: 69},
//     ]
//     // )
//     return (
//         <div>
//             {/*<NewComponent students={students}/>*/}
//             {/*<TopCar topCar={topCar}/>*/}
//             {/*<Button/>*/}
//             {/*<UseState/>*/}
//             {/*<Filter/>*/}
//             <Input/>
//         </div>
//     );
// }

export default App;

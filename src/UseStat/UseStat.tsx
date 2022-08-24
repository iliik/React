import React, {useState} from 'react';


export const UseState = () => {


    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log('a')
    }

    const onClickHandler1 = () => {
        setA(1)
        console.log('a')

    }


    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickHandler1}>0</button>


        </div>
    )
}



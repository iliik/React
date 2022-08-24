import React,{ChangeEvent,useState}from 'react';
type InputType ={
    addMessage:(title:string)=>void
}

export const FullInput =  (props:InputType) => {
    let [title, setTitle]= useState('')

    const onChangeInoutHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler =()=>{
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInoutHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}
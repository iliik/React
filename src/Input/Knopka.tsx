import React from 'react';

type KnopkaPropsType = {
    name: string
    callBack: () => void
}

export const Knopka = (props: KnopkaPropsType) => {


    const onClickKnopkaHandler = () => {
        props.callBack()

    }

    return (
        <button onClick={onClickKnopkaHandler}>{props.name}</button>
    );
};


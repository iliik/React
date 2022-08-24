import React from 'react';
import {FilterType, MoneyType} from "./Filters/Filter";


type NewFilterPropsType = {
    currentMoney: MoneyType
    setFilter: (filter: FilterType) => void

}


export const NewFilter = (props: NewFilterPropsType) => {

    const onClickFilterHandler = (nameButton: FilterType) => {
        props.setFilter(nameButton)
    }
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>

                    )
                })}
            </ul>
            <div style={{marginLeft: '36px'}}>

                <button onClick={(event) => onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={(event) => onClickFilterHandler('all')}>all</button>
                <button onClick={(event) => onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </div>
    )
}
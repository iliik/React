import React, {useState} from 'react';
import {NewFilter} from '../NewFilter'

type MoneyItemType = {
    banknote: string,
    nominal: string,
    number: string
}

export type MoneyType = MoneyItemType[]
export type FilterType = "ruble" | "all" | "dollar"

export const Filter = () => {

    const [money, setMoney] = useState<MoneyType>([
        {banknote: 'dollar', nominal: '100', number: 'a1234567890'},
        {banknote: 'dollar', nominal: '100', number: 'z1234567890'},
        {banknote: 'ruble', nominal: '50', number: 'w1234567890'},
        {banknote: 'dollar', nominal: '100', number: 'e1234567890'},
        {banknote: 'dollar', nominal: '50', number: 'r1234567890'},
        {banknote: 'ruble', nominal: '100', number: 'x1234567890'},
        {banknote: 'dollar', nominal: '50', number: 'v1234567890'},
        {banknote: 'ruble', nominal: '50', number: 'b1234567890'}
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
        setMoney(currentMoney)
    }

    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
        setMoney(currentMoney)
    }


    return (
        <>
            <NewFilter currentMoney={currentMoney}
                       setFilter={setFilter}


            />
        </>
    )
}




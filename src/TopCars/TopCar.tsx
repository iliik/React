type TopCar = {
    topCar: Array<TopCarType>
}

type TopCarType = {
    manufacturer: string
    model: string
}

export const TopCar = (props: TopCar) => {
    return (
        <div>
            {props.topCar.map((objectFromTopCar,) => {
                return (
                    <table>
                        <tr>
                            <th>{objectFromTopCar.manufacturer}</th>
                            <th>{objectFromTopCar.model}</th>
                        </tr>
                    </table>

                )
            })}
        </div>
    )

}

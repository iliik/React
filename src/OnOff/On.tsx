import s from "./On.module.css";
import {useState} from "react";


export const Off = () => {
    let [on, seton] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px  solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClickd = () => {
        seton(on)

    }
    const offClickd = () => {
        seton(on)

    }
    return (
        <div>
            <div style={onStyle} onClick={onClickd}>On
            </div>
            <div style={offStyle} onClick={offClickd}>Off
            </div>
            <div style={indicatorStyle} onClick={() => {
            }}></div>
        </div>
    )
}
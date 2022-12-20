import {AccordionTTitle} from "./AccordionTTitle";
import {AccordionBody} from "./AccordionBody";
import React from "react";

type StarPropsType = {
    title: string
    collapsed:boolean
}
export  const Star = (props:StarPropsType) => {
        return<AccordionTTitle title={props.title} />
    { !props.collapsed && <AccordionBody  />}
}

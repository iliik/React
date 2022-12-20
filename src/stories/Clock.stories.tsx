import {Clock} from "../clock/Clock";

export default {
    title: 'Clock',
    component: Clock,
}
export const BaseExample1 = () => {
    return <Clock mode={'analog'}/>
}
export const BaseExample = () => {
    return <Clock mode={'digital'}/>
}
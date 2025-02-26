import MyInput from "./MyInput";

export default {
    title: 'My Input',
    component: MyInput, 
}

export const SmallInput = () => (
    <MyInput size="10rem" placeholder="Enter Your Name" />
)


export const MediumInput = () =>(
    <MyInput size="20rem" placeholder="Enter Your Name" />
)

export const LargeInput = () => (
    <MyInput size="30rem" placeholder="Enter your full name here..." />
)
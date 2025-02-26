import VariationButton from "./VariationButton";

export default {
    title: "Button",
    component: VariationButton,
    

}

export const Default ={
    args: {
        label: "Click Me",
        color: "#007bff",
        disabled: false,
    },

}
export const DefaultButton ={
    args: {
        label: "Disabled",
        color: "#007bff",
        disabled: true,
    }, 
}
export const Primary ={
    args: {
        label: "Disabled",
        color: "#007bff",
        disabled: false,
    }, 
}
export const Secondary ={
    args: {
        label: "Disabled",
        color: "#007bff",
        disabled: true,
    }, 
}
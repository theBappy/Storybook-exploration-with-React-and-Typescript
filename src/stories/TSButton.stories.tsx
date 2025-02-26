import { Button, ButtonProps } from "./TSButton";
import {Meta, StoryObj} from '@storybook/react'


const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        color: {control: 'color'},
        label: {control: 'text'},
        disabled: {control: 'boolean'},
    },
};

export default meta;


export const Default: StoryObj = {
    args: {
        label: 'Click Me', 
        color: '#007bff',
        disabled: false,
    }
}
export const Disabled: StoryObj = {
    args: {
        label: 'Disabled Button', 
        color: '#007bff',
        disabled: true,
    }
}
export const Red: StoryObj = {
    args: {
        label: 'Red Button', 
        color: '#ff0000',
        disabled: false,
    }
}
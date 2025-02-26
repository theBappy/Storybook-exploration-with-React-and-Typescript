import { LargeInput, MediumInput } from "./MyInput.stories";
import { Primary } from "./Button.stories";


export default {
    title: 'Combo/Components',
}

export const Combo = () => {
    return (
        <>
            <MediumInput placeholder="Enter whatever" />
            <Primary  />
        </>
    )
}
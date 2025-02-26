import Button from "./Button";


export default {
    title:'products/buttons',
    component:Button,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: "light",
            values: [
              { name: "light", value: "#ffffff" },
              { name: "dark", value: "#333333" },
              { name: "sky blue", value: "#00bcd4" },
              { name: "sunset orange", value: "#ff5722" },
              { name: "mint green", value: "#4caf50" },
              { name: "vivid purple", value: "#9c27b0" },
              { name: "lemon yellow", value: "#ffeb3b" },
              { name: "deep blue", value: "#2196f3" },
              { name: "coral pink", value: "#ff4081" },
              { name: "electric lime", value: "#cddc39" },
              { name: "midnight blue", value: "#003366" },
              { name: "hot pink", value: "#e91e63" },
              { name: "goldenrod", value: "#ff9800" },
              { name: "slate gray", value: "#607d8b" },
              { name: "lavender", value: "#9c27b0" },
              { name: "chartreuse", value: "#7fff00" },
              { name: "peach", value: "#ffb6b9" },
              { name: "aquamarine", value: "#00ffff" },
              { name: "rosewood", value: "#7a2a3d" },
            ],
          },
        controls: {
            expanded: true,
        },
    },
   
    argTypes: {
        backgroundColor: {control: "color"},
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        label: {
            control: 'text',
            description: 'Text displayed on the button',
        },
        borderRadius: {
            control: 'number',
            min: 0,
            max: 50,
            step: 1,
        },
      
    },
};

export const Primary = {
    args: {
        label: "Click Me",
        backgroundColor: "#007bff",
        size: "medium",
        borderRadius: 4,
        fontSize: "16px",
        textColor: "#fff",
    }
}
export const Secondary = {
    args: {
        label: "Click Me",
        backgroundColor: "#007bff",
        size: "medium",
        borderRadius: 4,
        fontSize: "16px",
        textColor: "#fff",
    }
}


//  Newer way of creating a component story
// export const Primary = {
//     args: {
//       primary: true,
//       label: "Primary Button",
//       onClick: () => alert("You clicked the Primary button"),
//       loading: false,
//       size: "medium",
//       color: "#007bff",
//       fullWidth: false,
//       icon: <FaHome />,
//       iconPosition: "left",
//       ariaLabel: "primary-button",
//     },
// };






// Older way of creating a component strory
// export const Primary = () => <Button variant='primary'>Primary</Button>
// export const Secondary= () => <Button variant='secondary'>Secondary</Button>
// export const Danger = () => <Button variant='danger'>Danger</Button>

// // Renaming Stories
// Primary.storyName = 'Blue Button'
// Secondary.storyName = 'Green Button'
// Danger.storyName = 'Red Button'
interface ButtonProps {
  label: string;
  backgroundColor: string
  siez: 'medium' | 'small' | 'large';
  borderRadius: number;
  fontSize: string;
  textColor: string;
}

const Button = ({label,  backgroundColor, size, borderRadius, textColor, fontSize} : ButtonProps) => {
  const sizeStyles ={
    small: '5px 10px',
    medium: '10px 20px',
    large: '15px 30px',
  }
  return (
    <button
    style={{
      backgroundColor,
      padding: sizeStyles[size],
      borderRadius:`${borderRadius}px`,
      fontSize: fontSize,
      color: textColor,

    }}
    >{label}</button>
  )
}

export default Button
















// import "./style.css";

// interface ButtonProps {
//   label: string;
//   onClick: () => void;
//   primary?: boolean;
//   disabled?: boolean;
//   loading?: boolean;
//   size?: "small" | "medium" | "large";
//   color?: string;
//   fullWidth?: boolean;
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
//   ariaLabel?: string;
// }

// const Button = ({
//   label,
//   onClick,
//   primary = false,
//   loading = false,
//   size = "medium",
//   color,
//   fullWidth = false,
//   icon,
//   iconPosition,
//   ariaLabel,
// }: ButtonProps) => {
//   // Conditional classes based on props
//   const buttonClass = `
//     button
//     ${primary ? "button--primary" : "button--secondary"}
//     ${size ? `button--${size}` : "button--medium"}
//     ${color ? `button--custom-color` : ""}
//     ${fullWidth ? "button--fullwidth" : ""}
//     ${loading ? "button--loading" : ""}
//   `;

//   return (
//     <button
//       className={buttonClass}
//       onClick={onClick}
//       aria-label={ariaLabel}
//       style={color ? { backgroundColor: color, color: "white" } : {}}
//     >
//       {loading && <span className="button__loading-spinner">Loading...</span>}
//       {icon && iconPosition === "left" && (
//         <span className="button__icon">{icon}</span>
//       )}
//       <span className="button__label">{label}</span>
//       {icon && iconPosition === "right" && (
//         <span className="button__icon">{icon}</span>
//       )}
//     </button>
//   );
// };

// export default Button;
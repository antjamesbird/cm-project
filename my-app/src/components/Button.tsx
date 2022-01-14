import * as React from "react";

interface IButtonProps {
  text: string;
  hasIcon: boolean;
  icon?: any;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <>
      <button className="btn">
        {props.hasIcon && <>{props.icon}</>}
        {props.text}
      </button>
    </>
  );
};

export default Button;

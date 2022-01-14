import * as React from "react";

interface IAvatarProps {
  size: string;
  avatar: string;
}

const Avatar: React.FC<IAvatarProps> = (props) => {
  return (
    <>
      <img
        src={props.avatar}
        alt="Avatar"
        className={props.size === "small" ? "avatar small" : "avatar large"}
      ></img>
    </>
  );
};

export default Avatar;

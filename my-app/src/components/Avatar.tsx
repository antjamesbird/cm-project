import * as React from "react";
import { v4 as uuidv4 } from "uuid";

interface IAvatarProps {
  list: Array<any>;
  size: string;
}

const Avatar: React.FC<IAvatarProps> = (props) => {
  return (
    <div className="avatar-wrap">
      {props.list.map((el: any) => (
        <img
          key={uuidv4()}
          src={el.avatar}
          alt="Avatar"
          className={props.size === "small" ? "avatar small" : "avatar large"}
        ></img>
      ))}
    </div>
  );
};

export default Avatar;

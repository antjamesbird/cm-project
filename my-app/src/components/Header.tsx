import * as React from "react";

interface IHeaderProps {
  title: string;
  subText: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p className="color-fg-muted">{props.subText}</p>
    </div>
  );
};

export default Header;

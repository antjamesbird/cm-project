import * as React from "react";
import { NavLink } from "react-router-dom";

interface ITabs {
  name: string;
  route: string;
}

interface ITabsProps {
  tabs: Array<ITabs>;
  callBackFn(index: number): void;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const handleTabClick = (e: any, index: number) => {
    if (typeof props.callBackFn === "function") props.callBackFn(index);
  };

  return (
    <nav>
      {props.tabs &&
        props.tabs.map((item: ITabs, index: number) => (
          <NavLink
            onClick={(e) => handleTabClick(e, index)}
            className={({ isActive }) =>
              isActive ? "tab active" : "tab inactive"
            }
            key={item.name}
            to={item.route}
          >
            {item.name}
          </NavLink>
        ))}
    </nav>
  );
};

export default Tabs;

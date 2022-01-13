import * as React from "react";
import { Link } from "react-router-dom";

interface ITabs {
  name: string;
  route: string;
}

interface ITabsProps {
  tabs: Array<ITabs>;
  callBackFn(index: number): void;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const handleTabClick = (index: number) => {
    if (typeof props.callBackFn === "function") props.callBackFn(index);
  };

  return (
    <nav>
      {props.tabs &&
        props.tabs.map((item: ITabs) => (
          <Link className="tab" key={item.name} to={item.route}>
            {item.name}
          </Link>
        ))}
    </nav>
  );
};

export default Tabs;

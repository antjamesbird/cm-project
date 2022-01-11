import * as React from "react";

interface ITabsProps {
  tabs: Array<string>;
  callBackFn(index: number): void;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const handleTabClick = (index: number) => {
    if (typeof props.callBackFn === "function") props.callBackFn(index);
  };

  return (
    <nav>
      <ul>
        {props.tabs &&
          props.tabs.map((description: string, index: number) => (
            <li onClick={() => handleTabClick(index)} key={description}>
              {description}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Tabs;

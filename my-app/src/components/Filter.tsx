import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IFilterListProps {
  label: string;
  text: string;
  placeholderText?: string;
  hasSearch: boolean;
  defaultSelection: string;
  list: Array<string>;
  callBackFn(index: string): void;
}

const FilterList: React.FunctionComponent<IFilterListProps> = (props) => {
  const [currentSelected, setCurrentSelected] = useState(
    props.defaultSelection
  );
  const [showList, setShowList] = useState(false);

  const handleSelection = (value: string) => {
    props.callBackFn(value);
    setCurrentSelected(value);
  };

  return (
    <div className="filter-menu" onClick={() => setShowList(!showList)}>
      {props.label}: <strong>{currentSelected} </strong>
      {showList && (
        <div className="filter-list">
          <p>{props.text}</p>
          {props.hasSearch && (
            <input type="text" placeholder={props.placeholderText} />
          )}

          {props.list.length > 0 && (
            <ul>
              {props.list.map((value) => (
                <li onClick={() => handleSelection(value)} key={uuidv4()}>
                  {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterList;

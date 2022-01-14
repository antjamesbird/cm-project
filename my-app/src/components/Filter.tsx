import React, { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IFilterListProps {
  label: string;
  text: string;
  placeholderText?: string;
  hasSearch: boolean;
  defaultSelection: string;
  list: Array<string>;
  callBackFn(index: string): void;
  reset(): void;
}

const FilterList: React.FC<IFilterListProps> = (props) => {
  const [currentSelected, setCurrentSelected] = useState(
    props.defaultSelection
  );
  const [showList, setShowList] = useState(false);
  const [currentList, setCurrentList] = useState(props.list);

  const handleSelection = (value: string) => {
    props.callBackFn(value);
    setCurrentSelected(value);
  };

  const handleReset = () => {
    props.reset();
    setCurrentSelected(props.defaultSelection);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filterList = props.list.filter(
      (item) => item.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    if (filterList.length > 0) setCurrentList(filterList);
  };

  return (
    <>
      {showList && (
        <div onClick={() => setShowList(!showList)} className="overlay"></div>
      )}
      <div className="filter-menu">
        <span onClick={() => setShowList(!showList)}>
          {props.label}: <strong>{currentSelected} </strong>
        </span>

        {props.hasSearch && showList && (
          <div className="Search-Wrap">
            <div className="Search">
              <p>{props.text}</p>
              <input
                onChange={(e) => handleSearch(e)}
                className="form-control"
                type="text"
                placeholder={props.placeholderText}
              />
            </div>
          </div>
        )}

        {showList && (
          <div className="filter-list">
            {props.list.length > 0 && (
              <ul style={{ marginTop: props.hasSearch ? "90px" : "10px" }}>
                {currentSelected !== props.defaultSelection && (
                  <li onClick={() => handleReset()}>
                    <strong>X</strong> Clear Selection
                  </li>
                )}
                {currentList.map((value) => (
                  <li onClick={() => handleSelection(value)} key={uuidv4()}>
                    {value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterList;

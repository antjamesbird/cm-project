import * as React from "react";

interface IFiltersProps {}

const Filters: React.FunctionComponent<IFiltersProps> = (props) => {
  return (
    <div className="filter-container">
      <div className="primary">buttons</div>
      <div className="secondary">buttons</div>
    </div>
  );
};

export default Filters;

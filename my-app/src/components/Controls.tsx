import Tabs from "./Tabs";
import FilterList from "./Filter";
import { LANGUAGES } from "../constants";

const Controls = () => {
  const handleTabClick = (index: number) => {
    console.log("the tab was clicked, index is", index);
  };

  const handleFilterSelect = (value: string, type: string) => {
    console.log("clicked", value, type);
  };

  return (
    <div className="filter-container">
      <div className="primary">
        <Tabs
          callBackFn={handleTabClick}
          tabs={[
            { name: "Repositories", route: "/" },
            { name: "Developers", route: "/developers" },
          ]}
        />
      </div>
      <div className="secondary">
        <FilterList
          hasSearch
          text="Select a language"
          placeholderText="Filter languages"
          label="Spoken Language"
          defaultSelection="Any"
          list={LANGUAGES}
          callBackFn={(arg) => handleFilterSelect(arg, "language")}
        />

        <FilterList
          hasSearch={false}
          text="Date range"
          label="Spoken Language"
          defaultSelection="Today"
          list={[]}
          callBackFn={(arg) => handleFilterSelect(arg, "date")}
        />
      </div>
    </div>
  );
};

export default Controls;

import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import FilterList from "./Filter";
import { LANGUAGES } from "../constants";
import { useQueryClient, useMutation } from "react-query";

const Controls = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const query = tabIndex === 0 ? "repositories" : "developers";
  const queryClient = useQueryClient();

  const [originalData, setOriginalData] = useState([]);
  const [filterSettings, setfilterSettings] = useState({
    value: "",
    filter: "",
  });

  const handleTabClick = (index: number) => {
    setTabIndex(index);
  };

  const filterList = (value: string, filter: string) => {
    const filterList = originalData.filter(
      (item: any) => item[filter] === value
    );

    if (filterList.length > 0) {
      queryClient.setQueryData(query, () => [...filterList]);
    }
  };

  useEffect(() => {
    filterList(filterSettings.value, filterSettings.filter);
  }, [originalData]);

  const handleFilterSelect = async (value: string, filter: string) => {
    setfilterSettings({
      value,
      filter,
    });

    if (originalData.length === 0) {
      const data: any = queryClient.getQueryData(query);
      setOriginalData(data);
    }
    filterList(value, filter);
  };

  const handleReset = () => {
    queryClient.setQueryData(query, () => [...originalData]);
  };

  return (
    <div className="filter-container">
      <div className="primary">
        <Tabs
          callBackFn={(index) => handleTabClick(index)}
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
          reset={handleReset}
        />

        <FilterList
          hasSearch={false}
          text="Date range"
          label="Spoken Language"
          defaultSelection="Today"
          list={["Today", "This week", "This month"]}
          callBackFn={(arg) => handleFilterSelect(arg, "date")}
          reset={handleReset}
        />
      </div>
    </div>
  );
};

export default Controls;

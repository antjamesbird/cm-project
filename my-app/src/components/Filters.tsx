import Tabs from "./Tabs";

function Filters() {
  const handleTabClick = (index: number) => {
    console.log("the tab was clicked, index is", index);
  };
  return (
    <div className="filter-container">
      <div className="primary">
        <Tabs
          callBackFn={handleTabClick}
          tabs={["Repositories", "Developers"]}
        />
      </div>
      <div className="secondary">buttons</div>
    </div>
  );
}

export default Filters;

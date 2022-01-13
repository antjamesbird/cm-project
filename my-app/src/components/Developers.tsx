import { ENDPOINTS } from "../constants";
import { useQuery } from "react-query";

// TODO Create interface for response payload

const Developers = () => {
  const fetchDevs = async () => {
    const response = await fetch(ENDPOINTS.devs);
    return response.json();
  };

  const { data, status, isLoading, isError } = useQuery(
    "developers",
    fetchDevs
  );

  console.log("data", data);
  console.log("status", status);

  // TODO Create templates for these states

  if (isLoading) return <div>Loading......</div>;

  if (isError) return <div>There was an error......</div>;

  return (
    <div className="Repo">
      {data.map((item: any) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default Developers;

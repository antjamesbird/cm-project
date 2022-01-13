import { ENDPOINTS } from "../constants";
import { useQuery } from "react-query";

// Creatte interface for response payload

const Repositories = () => {
  const fetchRepos = async () => {
    const response = await fetch(ENDPOINTS.repos);
    return response.json();
  };

  const { data, status, isLoading, isError } = useQuery(
    "repositories",
    fetchRepos
  );

  console.log("data", data);
  console.log("status", status);

  if (isLoading) return <div>Loading......</div>;

  if (isError) return <div>There was an error......</div>;

  return (
    <div className="Repo">
      {data.map((item: any) => (
        <div key={item.repositoryName}>{item.repositoryName}</div>
      ))}
    </div>
  );
};

export default Repositories;

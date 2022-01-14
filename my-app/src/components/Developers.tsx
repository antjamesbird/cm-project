import { ENDPOINTS } from "../constants";
import { useQuery } from "react-query";
import Avatar from "./Avatar";
import Button from "./Button";

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

  if (isLoading) return <div>Loading......</div>;

  if (isError) return <div>There was an error......</div>;

  const SponsorIcon = () => {
    return (
      <>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="octicon octicon-heart icon-sponsor mr-1 v-align-middle color-fg-sponsors anim-pulse-in"
        >
          <path d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>
        </svg>
      </>
    );
  };

  return (
    <div className="Repo">
      {data.map((item: any) => (
        <article className="box-row" key={item.name}>
          <Avatar avatar={item.avatar} size="large" />
          <div className="dev-content">
            <div>
              <a className="heading" href={item.url}>
                {item.name}
              </a>
              <p>{item.username}</p>
            </div>
            <div>
              <p>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-flame mr-1 color-fg-severe"
                >
                  <path d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"></path>
                </svg>
                POPULAR REPO
              </p>
              <a href={item.popularRepository.url}>
                {item.popularRepository.repositoryName}
              </a>
              <p>{item.popularRepository.description}</p>
            </div>
            <div>
              <Button hasIcon={false} text="Follow" />
              <Button hasIcon icon={<SponsorIcon />} text="Sponsor" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Developers;

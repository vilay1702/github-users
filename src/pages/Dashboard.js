import React from "react";
import { Info, Repos, User, Search, Loading } from "../components";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        {/* <Navbar></Navbar> */}
        <Search />
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        {/* <Navbar></Navbar> */}
        <Search />
        <Info />
        <User />
        <Repos />
      </main>
    );
  }
};

export default Dashboard;

import UserResults from "../components/layout/users/UserResults";
import UserSearch from "../components/layout/users/UserSearch";
import React from "react";

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;

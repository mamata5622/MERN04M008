import React from "react";
import { useLocation } from "react-router";

function Profile() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tab = query.get("tab");
  return (
    <div>
      Profile
      <br />
      Tab : {tab}
    </div>
  );
}

export default Profile;

import React from "react";
import { useLocation, useParams } from "react-router";

function UserDetails() {
  const { id } = useParams();

  // find out the location
  const location = useLocation();

  // refining the search using the location
  const query = new URLSearchParams(location.search)

  // from the urlSearchParams object get the query values
  const name=query.get("name");
  const age=query.get("age");

  return (
    <div>
      UserDetails
      <br />
      User Id:{id}
      <br />
      Name : {name}
      <br/>
      Age : {age}
    </div>
  );
}

export default UserDetails;

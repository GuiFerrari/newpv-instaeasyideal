import React from "react";
import axios from "axios";
import withAnalytics from "~/hocs/withAnalytics";

const Users = ({ users }) => (
  <div>
    <img src="/static/logo-completa.png" />
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  </div>
);

Users.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};

export default withAnalytics()(Users);

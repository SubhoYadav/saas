import React from "react";
import "./user.scss";
import DataTable from "../../components/datatable/DataTable";

import testUsers from "../../data/testUsers.json";
import Table from "react-bootstrap/Table";

export default function User() {
  return <DataTable></DataTable>;
}

{
  /* <table className="user-table">
  <tr>
    <th>Name</th>
    <th>Role</th>
    <th>DOJ</th>
    <th>Subscription</th>
    <th>Limit</th>
  </tr>
  {testUsers.map((testUser) => {
    return <tr></tr>;
  })}
</table>; */
}

// UI: https://dribbble.com/shots/11318664-Data-Table-for-Project-Managers-CEO-Leads/attachments/2929445?mode=media

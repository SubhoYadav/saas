import React from "react";
import DialogBox from "../DialogBox/DialogBox";
import { UserApi } from "../../webServices/user";
import "./datatable.scss";

// Pls remove this component, its there only for testing purpouse
import Login from "../../pages/login/Login";

export default function DataTable() {
  const filters = ["user_role", "deleted"];
  const [selectedObj, setSelectedObj] = React.useState({
    user_role: "",
    deleted: "",
  });
  // The array contains the data points, on the basis of which we want to filter out the dataset
  const [filter, setFilter] = React.useState({});

  const [users, setUsers] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [controlAddUserDialog, setcontrolAddUserDialog] = React.useState(false);
  // Fetch Methods

  // Since, use Effect's callback returns a function (cleanup function) it cannot be async so creating the async functions here
  async function fetchUserList() {
    const userList = await UserApi.userList();
    if (userList.status) {
      setUsers(userList.data);
    }
  }

  function setFilters() {
    console.log("Setting filters ");
    let filterObj = {};
    let selectedObj = {};
    console.log("User ", users);
    for (let i of filters) {
      let filterData = users.map((user) => user[i]);
      filterData = Array.from(new Set(filterData));
      filterObj[i] = filterData;
      selectedObj[i] = filterObj[i][0];
    }
    console.log("Filter Object ", filterObj);
    setFilter(filterObj);
    // setSelectedObj(selectedObj);
  }

  const userListSearch = async (searchString = "", filterObj = null) => {
    console.log(filterObj);
    const userListSearch = await UserApi.userListSearch(searchString, {
      filter: filterObj,
    });
    if (userListSearch.status) {
      setUsers(userListSearch.data);
    }
  };

  function handleSelectChange(event, element) {
    console.log("On change fired");
    let newSelectedObj = { ...selectedObj };
    newSelectedObj[element] = event.target.value;
    setSelectedObj(newSelectedObj);
    if (event.target.value != "ALL") {
      userListSearch("", newSelectedObj);
    } else {
      userListSearch();
    }
  }

  React.useEffect(() => {
    setFilters();
  }, []);
  // Fetch Methods
  React.useEffect(() => {
    fetchUserList();
  }, []);

  // Search the user in the db
  React.useEffect(() => {
    userListSearch(searchText);
  }, [searchText]);
  return (
    <div className="data-table-container">
      <div className="actions">
        <div className="export-import">
          {/* Upload Button */}
          <button
            className="upld-dnld-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <img src="./upload.png" alt="" width="20px" />
            Upload
          </button>
          {/* Upload Button */}

          {/* Download Button */}
          <button
            className="upld-dnld-btn"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <img src="./download.png" alt="" width="20px" />
            Download
          </button>
          {/* Download Button */}

          {/* Delete Button */}
          <button
            className="upld-dnld-btn"
            style={{
              display: "flex",
              marginLeft: "15px",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              backgroundColor: "#0b1c33",
            }}
          >
            <img src="./delete.svg" alt="" width="20px" />
            Delete
          </button>
          {/* Delete Button */}
        </div>
        <div className="filters">
          {Object.keys(filter).map((element, index) => {
            return (
              <select
                name=""
                id=""
                key={index}
                value={selectedObj[element]}
                onChange={(event) => handleSelectChange(event, element)}
              >
                {filter[element].map((e, i) => {
                  return (
                    <option value={e} key={i}>
                      {e}
                    </option>
                  );
                })}
                <option value="ALL">ALL</option>
              </select>
            );
          })}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="upld-dnld-btn"
            style={{
              display: "flex",
              marginLeft: "15px",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={() => setcontrolAddUserDialog(!controlAddUserDialog)}
          >
            <img src="plus.png" alt="" width="20px" />
            Add
          </button>
        </div>
      </div>
      <table>
        <thead>
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Password</th>
          <th>Role</th>
          <th>Status</th>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <div className="user-details">
                    <div className="avatars">
                      <img
                        src={user.user_profile_img}
                        alt=""
                        style={{ marginLeft: "-10px" }}
                      />
                    </div>
                    <h5 style={{ color: "#ddd" }}>{user.user_name}</h5>
                  </div>
                </td>
                <td>{user.user_email}</td>
                <td>{user.user_mobile}</td>
                <td>{user.user_password}</td>
                <td>{user.user_role}</td>
                <td>{user.deleted}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <DialogBox isDialogOpen={controlAddUserDialog}>
        <Login />
        {/* Subho Yadav */}
      </DialogBox>
    </div>
  );
}

// UI: https://dribbble.com/shots/11318664-Data-Table-for-Project-Managers-CEO-Leads/attachments/2929445?mode=media

/**
 * user_id
 * user_name
 * user_email
 * user_mobile
 * user_password
 * user_role
 * user_profile_img
 * deleted
 *
 */

import React from "react";
import MUIDataTable from "mui-datatables";
import { useFetchUsersQuery } from "../../services/UsersAPI";

const UsersTable: React.FC = () => {
  const { data } = useFetchUsersQuery();

  const usersData = data && Array.isArray(data) ? data : [];

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "username",
      label: "Username",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phone",
      label: "Phone",
    },
  ];

  const options = {
    download: false,
    print: false,
    selectableRowsHideCheckboxes: true,
  };

  return (
    <MUIDataTable
      title={"User Management Table"}
      data={usersData}
      columns={columns}
      options={options}
    />
  );
};

export default UsersTable;

import React from "react";
import MUIDataTable from "mui-datatables";

const UserTable = () => {
  const columns = ["Name", "Username", "Email", "Phone"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    download: false,
    print: false,
    selectableRowsHideCheckboxes: true,
  };

  return (
    <MUIDataTable
      title={"User Management Table"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default UserTable;

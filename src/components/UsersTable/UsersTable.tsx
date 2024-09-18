import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useFetchUsersQuery } from "../../services/UsersAPI";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectUsers, syncUsers } from "../../redux/slice";

const UsersTable: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  console.log("users:", users);

  // const filter = useSelector(selectFilter);
  const { data } = useFetchUsersQuery();
  // const usersData = data && Array.isArray(data) ? data : [];

  useEffect(() => {
    if (!data) return;
    dispatch(syncUsers(data));
  }, [data, dispatch]);

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
      data={users}
      columns={columns}
      options={options}
    />
  );
};

export default UsersTable;

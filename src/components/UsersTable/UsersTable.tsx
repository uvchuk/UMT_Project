import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useFetchUsersQuery } from "../../services/UsersAPI";
import { useDispatch, useSelector } from "react-redux";
import { syncUsers } from "../../redux/slice";
import { selectUsers } from "../../redux/selectors";

const UsersTable: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const { data } = useFetchUsersQuery();

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
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

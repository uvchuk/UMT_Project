import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsersQuery } from "../../services/UsersAPI";
import { filterUsers, syncUsers } from "../../redux/slice";
import { selectFilter, selectUsers } from "../../redux/selectors";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const UsersTable: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useFetchUsersQuery();
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
    dispatch(syncUsers(data));
  }, [data, dispatch]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(filterUsers({ ...filter, [name]: value }));
  };

  const filteredUsersList = users.filter((user) =>
    Object.entries(filter).every(
      ([key, query]) =>
        query === "" ||
        user[key as keyof typeof user]
          ?.toString()
          .toLowerCase()
          .includes(query.toLowerCase()),
    ),
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                label="Name"
                name="name"
                value={filter.name}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Username"
                name="username"
                value={filter.username}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Email"
                name="email"
                value={filter.email}
                onChange={handleFilterChange}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Phone"
                name="phone"
                value={filter.phone}
                onChange={handleFilterChange}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsersList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;

import React, { useState } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import AddDialog from "../components/Todo/AddTask";
import { crossItem } from "../store/actions/todoActions";
import "../styles/todo.scss";
export default function TodoList() {
  const items = useSelector((state) => state.todo.items);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleMark = (id) => {
    dispatch(crossItem(id));
  };
  return (
    <Grid container>
      <Grid item md={12} className="todo-list__title">
        <h1>Marketing Campaign</h1>
      </Grid>
      <Grid
        item
        container
        md={12}
        className="todo-list__table"
        justifyContent="center"
      >
        <Grid item md={8}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-cell">
                    <Button
                      onClick={() => setOpen(true)}
                      className="todo-list__add-button"
                    >
                      Add task
                    </Button>
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    <span className="todo-list__priority-label">Priority</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow key={row.id} onClick={() => handleMark(row.id)}>
                    <TableCell className="table-cell todo-list__task-name">
                      <CheckCircleOutlineIcon
                        className={`todo-list__table-icon--${
                          row.isActive ? "active" : "inactive"
                        }`}
                      />
                      <span className={row.isActive ? "" : "cross"}>{row.task}</span>
                    </TableCell>
                    <TableCell className="table-cell" align="right">
                      <span className={`chip ${row.priority.toLowerCase()}`}>
                        {row.label}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <AddDialog open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
}

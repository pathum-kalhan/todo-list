import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, RadioGroup } from "formik-material-ui";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/todoActions";
import "../../styles/add-task.scss";

interface Props {
  onClose: () => void;
  open: boolean;
}

type Task = string;

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

enum Label {
  Low = "Low",
  Med = "Med",
  High = "High",
}

interface Item {
  task: Task;
  priority: Priority;
}

export default function SimpleDialog(props: Props) {
  const dispatch = useDispatch();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  let validationSchema = Yup.object().shape({
    task: Yup.string()
      .required("Task name is required.")
      .max(15, "Maximum length for task name is 15.")
      .min(2, "Minimum length for task name is 2."),
    priority: Yup.string().required(),
  });

  const saveTask = ({ task, priority }: Item) => {
    const id = Date.now().toString();
    let label: Label;
    if (priority === "Medium") {
      label = Label.Med;
    } else {
      label = Label[Priority[priority] as keyof typeof Label];
    }
    dispatch(addItem({ task, priority, id, isActive: true, label }));
    handleClose();
  };

  const initialValues:Item = {
    task: "",
    priority: Priority.Medium,
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        <h2 className="add-task__title">Add a task 📋</h2>
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={saveTask}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, values }) => {
          return (
            <Form>
              <DialogContent>
                <Field
                  name="task"
                  label="Task name"
                  component={TextField}
                  variant="outlined"
                  fullWidth
                />
                <Field component={RadioGroup} name="priority" row>
                  {["Low", "Medium", "High"].map((e) => (
                    <FormControlLabel
                      value={e}
                      control={<Radio color="primary" />}
                      label={e}
                    />
                  ))}
                </Field>
              </DialogContent>
              <DialogActions>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={!dirty || !isValid}
                >
                  save
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
}

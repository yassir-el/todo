import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Checkbox, CircularProgress, FormControlLabel, FormGroup, Input } from '@mui/material';
import "./Dialog.css";
import axios from 'axios';
import { pink } from '@mui/material/colors';
import { Calendar } from '..';

function SimpleDialog(props) {
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [repeat, setRepeat] = React.useState("Daily");
  const [date, setDate] = React.useState();
  const [disabled, setDisabled] = React.useState(true);
  const [validDate, setValidDate] = React.useState(true);
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async () => {
    setLoading(true);
    setDisabled(true);

    try {
      axios.post("http://127.0.0.1:8080/todo/create", {
        content: name,
        startDate: date,
        repeat: repeat
      }).then(response => {
        console.log(response.data);
      }).catch(e => {
        console.error(e.message);
      })
    }
    catch (e) {
      console.error(e.message);
    }


    setTimeout(() => {
      handleClose();
      setDisabled(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <Dialog onClose={handleClose} sx={
      {
        '& .MuiDialog-paper': {
          width: '80%',
          maxWidth: '500px',
          backgroundColor: 'rgb(31 41 55)',
          padding: 0,
          margin: 0,
          color: 'white',
        }
      }
    } open={open}>
      <DialogTitle sx={
        {
          textAlign: 'center',

          '& .MuiDialogTitle-root': {
            backgroundColor: 'rgb(31 41 55)',
            color: '#e5e7eb',
            padding: 10,
            margin: 0,
            borderRadius: 0,
          }
        }
      }>Create new Task</DialogTitle>

      <div className="dialog__input" style={
        {
          transform: 'height 0.3s',
        }
      }>
        <label for="taskName">Task Name</label>
        <div class="col-3">
          <input value={name} onChange={(e) => {
            setName(e.target.value)
            if (e.target.value === "") {
              setDisabled(true);
            } else {
              setDisabled(false);
            }
          }} class="effect-1" type="text" placeholder="" id='taskName' />
          <span class="focus-border"></span>
        </div>
        <label for="taskDescription">Task Description</label>
        <div class="col-3">
          <input class="effect-1" type="text" placeholder="" id='taskDescription' />
          <span class="focus-border"></span>
        </div>
        {/* <label for="taskDueDate">Task Due Date</label>
        <Input value={date} error={!validDate} onChange={
          (e) => {
            setDate(e.target.value);
            if (new Date(e.target.value) - new Date().setHours(0, 0, 0, 0) < 0) {
              setValidDate(0);
            } else {
              setValidDate(1);
            }
          }
        } class="effect-1" type="date" placeholder="" id='taskDueDate' /> */}
        <label htmlFor="repeat">Repeat</label>
        <select onChange={
          (e) => {
            setRepeat(e.target.value)
          }
        } name="repeat" id="repeat">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        {
          repeat === "weekly" &&
          <>
          <label>Repeat on</label>
          <FormGroup sx={
            {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 0,
              '& .MuiFormControlLabel-root': {
                color: 'white',
                '& .MuiCheckbox-root': {
                  color: "#bbb"
                }
              }
            }
            
          }>
            <FormControlLabel control={<Checkbox />} label="Monday" />
            <FormControlLabel control={<Checkbox />} label="Tuesday" />
            <FormControlLabel control={<Checkbox />} label="Wednesday" />
            <FormControlLabel control={<Checkbox />} label="Thursday" />
            <FormControlLabel control={<Checkbox />} label="Friday" />
            <FormControlLabel control={<Checkbox />} label="Saturday" />
            <FormControlLabel control={<Checkbox />} label="Sunday" />
          </FormGroup>
          </>
        }
        <label for="taskDueDate">Task Due Date</label>

        <Calendar />

        <button onClick={
          handleSubmit
        } disabled={disabled} style={
          {
            cursor: disabled ? "not-allowed" : "pointer"
          }
        }>
          {
            loading ? <CircularProgress size={15} /> : 'Create Task'
          }
        </button>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ setListTodayTasks }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="add-task btn-todo">
        New Task
      </button>
      {
        open &&
        <SimpleDialog
          open={open}
          onClose={handleClose}
          setListTodayTasks={setListTodayTasks}
        />
      }
    </div>
  );
}

/*
https://codepen.io/0adev/details/dyLaYyq
https://app.any.do/myday?d=anydo%3A%2F%2Fanydo%3Faction%3Dtasktab
https://www.youtube.com/watch?v=CJycVlSuaPg
*/
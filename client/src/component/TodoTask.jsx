import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PushPinIcon from '@mui/icons-material/PushPin';
import { MdPushPin } from "react-icons/md";
import { PiPushPinSimpleSlashFill } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from 'react';


export default function TodoTask({ children }) {
  const [clicked, setClicked] = useState(false);
  // const [position, setPosition] = useState([0, 0]);
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const onMouseMove = e =>
    setCursorPosition({ top: e.screenY, left: e.screenX });

  // useEffect(() => {
    window.onmousemove = function (e) {
      // console.log(e.clientX, e.clientY);
      if (clicked)
        setCursorPosition({ top: "calc(" + e.clientY + "px - 50px)"
      , left: "calc(" + e.clientX + "px - 50px)" });
    }
  // }
  // , [clicked]);
    // window.onmousedown = function (e) {
    //   console.log("mousedown");
    //   // if (clicked)
    //     setClicked(true);
    // }
    // window.onmouseup = function (e) {
    //   console.log("mouseup");
    //   // if (clicked)
    //     setClicked(false);
    // }

  return (


    <div style={{ position: clicked ? "absolute" : "static"
    , ...cursorPosition, cursor: "pointer" }} className="task-todo"
     onMouseDown={
      () => {
        setClicked(true);
      }
    } onMouseUp={
      ()  => {
        setClicked(false);
      }
    }>
      <div >

        <p className="task-text" style={
          {
            wordBreak: "break-all",
            userSelect: "none"
          }
        }>

          {
            children
          }
        </p>
      </div>
      <div className="todo-options">
        <IconButton>
          <CheckBoxIcon sx={
            {
              fontSize: "1.5rem",
              color: "#bbb"
            }
          } />
        </IconButton>
        <IconButton >
          <CiEdit color='white' />
        </IconButton>
        <IconButton >
          <MdPushPin color='white' />
        </IconButton>
      </div>
    </div>
  );
}
import React from 'react';
import logo from './logo.png';
import './App.css';
import TodoTask from './component/TodoTask';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import userImage from './unnamed.png';
import SimpleDialogDemo from './component/Dialog';
import useTodos from './hooks/useTodos';

function App() {
  const [showTomorrowTasks, setShowTomorrowTasks] = React.useState(false)
  const [showCompletedTasks, setShowCompletedTasks] = React.useState(false)
  const { listTodayTasks, setListTodayTasks } = useTodos();

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt='app-img' className="img-logo" />
          <h3>
            TaskAntlers
          </h3>
        </div>
        <div className="user-account">
          <h3>
            yel-mass
          </h3>
          <img
            src={userImage}
            alt='user-img'
            className="img-user"
          />
        </div>
      </div>
      <div className='App'>

        <div style={
          {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }
        }>
          <h1>
            Today's Tasks
          </h1>
          <SimpleDialogDemo setListTodayTasks={setListTodayTasks} />

        </div>
        <div className="tasks">
          {
            listTodayTasks.map((e, i) => {
              var obj = {
                "daily": 1,
                "weekly": 7,
                "monthly": 30
              };
              console.log("->>>  ", e.startDate);
              console.log("->>>  ", new Date(e.startDate).setHours(0, 0, 0, 0), "<----");
              console.log(new Date().setHours(0, 0, 0, 0));
              if (new Date(e.startDate).setHours(0, 0, 0, 0) !== new Date().setHours(0, 0, 0, 0)) {
                return null;
              }
              return (
                <TodoTask key={i}>
                  {e.content}
                </TodoTask>
              )
            })
          }
        </div>
        <div style={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            gap: '15px',

          }

        } onClick={
          () => setShowTomorrowTasks(!showTomorrowTasks)
        }>
          <h1>
            Tomorrow's Tasks
          </h1>
          <button className="show-tasks"  >
            {
              showTomorrowTasks ? <ExpandLessIcon /> : <ExpandMoreIcon />
            }
          </button>

        </div>
        {
          showTomorrowTasks && <div className="tasks">
            <TodoTask >
              Solve 1 leetcode problem
            </TodoTask>
            <TodoTask >
              Go to the gym
            </TodoTask>
            <TodoTask >
              Read 1 chapter of The Lean Startup book
            </TodoTask>
          </div>
        }



        <div style={
          {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '15px',

          }

        } onClick={
          () => setShowCompletedTasks(!showCompletedTasks)
        }>
          <h1>
            Completed Tasks
          </h1>
          <button className="show-tasks"  >
            {
              showCompletedTasks ? <ExpandLessIcon /> : <ExpandMoreIcon />
            }
          </button>

        </div>
        {
          showCompletedTasks && <div className="tasks">
            <TodoTask >
              Solve 1 leetcode problem
            </TodoTask>
            <TodoTask >
              Go to the gym
            </TodoTask>
            <TodoTask >
              Read 1 chapter of The Lean Startup book
            </TodoTask>
          </div>
        }
      </div>
    </>
  );
}

export default App;

/*

  https://www.w3schools.com/tags/att_a_rel.asp
  https://www.w3schools.com/tags/tag_code.asp

*/
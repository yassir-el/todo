import React, { createElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleDialog from './component/Dialog'

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const Calendar = () => {
  const [day, setDay] = useState(new Date().getDate());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(
    {
      day: undefined,
      month: undefined,
      year: undefined
    }
  );

  const fun = () => {
    let counter = 0;
    let result = []
    let divs = [];
    let date = new Date();
    date.setDate(1);
    let firstDay = date.toString().split(' ')[0];
    let arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let index = arr.indexOf(firstDay);
    console.log(index);
    console.log(firstDay);
    for (let i = 1; i < index; i++) {
      divs.push(<div style={
        {
          padding: "10px",
          opacity: 0.5
        }
      }>__</div>)
      counter++;
    }


    for (let i = 1; i <= getDaysInMonth(year, month); i++) {
      let content = i < 10 ? "0" : "";
      content += i;

      let className = '';
      let style = {};
      let fun = () => { };

      if (i === selectedDate.day && month === selectedDate.month && year === selectedDate.year) {
        className = 'selected-day';
        fun = () => {
          setSelectedDate({ day: undefined, month: undefined, year: undefined });
        }

      } else if (
        i === day && month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        className = 'days-today';
        fun = () => {
          setSelectedDate({ day: i, month: month, year: year });
        }
      } else if (
        (
          i < day && month === new Date().getMonth() &&
          year === new Date().getFullYear()
        )
        || (
          year === new Date().getFullYear() &&
          month < new Date().getMonth()
        )
      ) {
        className = 'disabled-day';
      } else {
        style = { cursor: 'pointer', padding: '10px' };
        fun = () => {
          setSelectedDate({ day: i, month: month, year: year });
        }
      }



      divs.push(
        <div className={className} style={style} key={i} onClick={
          fun
        }>
          {content}
        </div>
      );

      if ((counter + i) % 7 === 0) {
        let tmp = [];
        tmp.push(<div className='week'>
          {
            divs
          }
        </div>)
        result.push(tmp);
        divs = [];
      }
    }
    if (divs.length) {
      while (divs.length < 7) {
        divs.push(<div style={
          {
            padding: "10px",
          }
        }>__</div>)
      }
      let tmp = [];
      tmp.push(<div className='week'>
        {
          divs
        }
      </div>)
      result.push(tmp);
    }
    return result;
  }

  useEffect(() => {
    // fun()
  })
  return (
    <div style={
      {
        color: "white",
      }
    }>
      <div style={
        {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }>
        <button onClick={
          () => {
            setMonth(month - 1);
          }
        } className='btn-todo done-btn' style={
          {
            width: "fit-content"
          }
        }>
          &lt;
        </button>
        <h2>
          {
            day
          }
        </h2>
        <h2>
          {
            new Date(year, month, day).toLocaleString('default', {
              month: 'long'
            })
          }
        </h2>

        <h2>
          {
            year
          }
        </h2>

        <button onClick={
          () => {
            setMonth(month + 1);
          }
        } className='btn-todo done-btn' style={
          {
            width: "fit-content"
          }
        }>
          &gt;
        </button>



      </div>
      <div className='week-days' style={
        {
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          padding: "0 10px",
        }
      }>
        <h3>
          Mon
        </h3>
        <h3>
          Tue
        </h3>
        <h3>
          Wed
        </h3>
        <h3>
          Thu
        </h3>
        <h3>
          Fri
        </h3>
        <h3>
          Sat
        </h3>
        <h3>
          Sun
        </h3>
      </div>
      <div className='days' id='test-days'>
        {
          fun()
        }
      </div>
    </div>
  );
};

const Test = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">

      <a href="#" className="accordion-toggle">Hover for height animate</a>
      <div class="accordion-content">
        <div class="accordion-inner">
          <button onClick={() => setShow(!show)}>Show Dialog</button>
          {
            show && 
              <>
                        <p>For animate the "height" of element with CSS Transitions you need use "max-height".</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p>
          <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p></>
}
          </div>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

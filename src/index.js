import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssStyle = {};

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

if(curDate >= 1 && curDate < 12 ){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} 
else if(curDate >= 12 && curDate < 19){
  greeting = 'Good Afternoon'
  cssStyle.color = 'Orange'
} else{
  greeting = 'Good Night'
  cssStyle.color = 'Black'
}


ReactDOM.render(
  <React.StrictMode>
  <div>
    <h1>Hello Sir, <span style={cssStyle} > {greeting} </span> </h1>
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

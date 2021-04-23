import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
// import * as Icons from 'IconsComponents/Icons/index';
// import { Air } from 'IconsComponents/Icons/index';
import ArrowDownRound from 'IconsComponents/broken/ArrowDownRound';

ReactDOM.render(
  <React.StrictMode>
    {/* <Air /> */}
    {/* <Icons.Air /> */}
    {/* {Object.entries(Icons).map(([name, func]) => (
      <div key={name}>{func()}</div>
    ))} */}
    {<ArrowDownRound />}
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppProps } from './app.model';
const AppComponent = (props: AppProps) => {
  const { customTitle, color, changeColor } = props;
  return (
    <div style={{ backgroundColor: color, padding: '1rem' }}>
      <h1>Dynamic import</h1>
      <h2>{customTitle}</h2>
      <button
        onClick={() => {
          console.log('react change color', color);
          changeColor();
        }}
      >
        Change color
      </button>
    </div>
  );
};

export const App = {
  render: (props: AppProps, container: Element) => {
    ReactDOM.render(<AppComponent {...props} />, container);
  }
};

// export const render = (props: AppProps, container: Element) => {
//     ReactDOM.render(<AppComponent {...props} />, container);
//   }
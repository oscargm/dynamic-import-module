
const App = (props) => (
  <div>
    <h1>Dynamic import</h1>
    <h2>Hello from local Component TEST {props.var}</h2>
  </div>
);

function init(element, variable) {
  ReactDOM.render(<App var={variable}/>, document.getElementById(element))
};
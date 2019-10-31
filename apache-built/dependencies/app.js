const App = () => (
  <div>
    <h1>Dynamic import</h1>
    <h2>Hello from local Component</h2>
  </div>
);

function init(element) {
  ReactDOM.render(<App />, document.getElementById(element));
}

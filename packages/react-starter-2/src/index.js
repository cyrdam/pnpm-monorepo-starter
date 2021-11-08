import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponent from './components/hello.component';

class App extends React.Component {
  render() {
    return <div className="app">
      <HelloComponent />
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container'),
);

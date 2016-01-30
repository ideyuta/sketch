import React from 'react';
import ReactDOM from 'react-dom';
import DrawLine from './components/DrawLine';

class App extends React.Component {
  render() {
    return (
      <div>
        <DrawLine />
      </div>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  ReactDOM.render(<App />, container);
});

import React from 'react';
import ReactDOM from 'react-dom';
import drawLine from './sketch/drawLine';

class App extends React.Component {
  componentDidMount() {
    drawLine('canvas');
  }

  render() {
    return (
      <div>
        <canvas
          id="canvas"
          style={{height: 200, width: 200}}
        />
        <button onClick={() => drawLine('canvas')}>DRAW</button>
      </div>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  ReactDOM.render(<App />, container);
});

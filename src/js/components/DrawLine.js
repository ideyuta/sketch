import React from 'react';
import paper from 'paper';


/**
 * DrawLine Component
 */
export default class DrawLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    this.drawLine();
  }

  /**
   * DrawLine
   *
   * http://paperjs.org/tutorials/getting-started/using-javascript-directly/#setting-up-a-scope
   */
  drawLine() {
    const container = document.getElementById('canvas');
    paper.setup(container);
    const path = new paper.Path();
    const start = new paper.Point(this.getRandomPos());
    path.strokeColor = 'black';
    path.moveTo(start);
    path.lineTo(start.add(this.getRandomPos()));
    paper.view.draw();
  }

  /**
   * Get Random Position
   *
   * @return {array} pos - pos x, y
   */
  getRandomPos() {
    const {height, width} = this.state;
    return [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.drawLine()}
          style={{position: 'fixed'}}
        >DRAW</button>
        <canvas
          id="canvas"
          style={{height: this.state.height, width: this.state.width}}
        />
      </div>
    );
  }
}

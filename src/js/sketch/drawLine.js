import paper from 'paper';

/**
 * DrawLine
 *
 * http://paperjs.org/tutorials/getting-started/using-javascript-directly/#setting-up-a-scope
 *
 * @param {string} id - canvas id
 */
export default function drawLine(id) {
  const container = document.getElementById(id);
  paper.setup(container);
  const path = new paper.Path();
  path.strokeColor = 'black';
  const pos = {
    end: [Math.floor(Math.random() * 200), Math.floor(Math.random() * 200)],
    start: [Math.floor(Math.random() * 200), Math.floor(Math.random() * 200)]
  };
  const start = new paper.Point(pos.start);
  path.moveTo(start);
  path.lineTo(start.add(pos.end));
  paper.view.draw();
}

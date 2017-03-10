import { SVG_NS } from '../settings';
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'x', 0);
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', '#f9e5ec');
    rect.setAttributeNS(null, 'stroke', '#f2a7c1');
    rect.setAttributeNS(null, 'stroke-width', '4px');
    rect.setAttributeNS(null, 'rx', '10');
    rect.setAttributeNS(null, 'ry', '10');
    let line = document.createElementNS(SVG_NS, 'line');
    line.setAttributeNS(null, 'stroke-dasharray', '15, 10');
    line.setAttributeNS(null, 'stroke-width', '3' );
    line.setAttributeNS(null, 'stroke', '#f2a7c1' )
    line.setAttributeNS(null, 'x1', this.width/2);
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'x2', this.width/2);
    line.setAttributeNS(null, 'y2', this.height);
    svg.appendChild(rect);
    svg.appendChild(line);
  }
}



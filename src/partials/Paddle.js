import { SVG_NS } from '../settings';
export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down, fill, rx, ry) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 30;
    this.score = 0;
    this.fill = fill;
    this.rx = rx;
    this.ry = ry;
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
        this.up();
        break;
        case down:
        this.down();
        break;
      }
    });
  }
  up(){
    this.y = Math.max(0, this.y - this.speed);
  }
  down(){
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'width', this.width + 10);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'fill', this.fill);
        rect.setAttributeNS(null, 'rx', '4');
        rect.setAttributeNS(null, 'ry', '4');
        svg.appendChild(rect);
    }
}
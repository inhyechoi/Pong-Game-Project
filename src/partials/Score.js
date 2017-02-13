import { SVG_NS } from '../settings';

export default class Score{

	constructor (x, y, size, fill){
		this.x = x;
		this.y = y;
		this.size = size;
		this.fill = fill;
	}
	
	render(svg, scoreCount){

	let score = document.createElementNS(SVG_NS, 'text');
	score.setAttributeNS(null, 'x', this.x);
	score.setAttributeNS(null, 'y', this.y);
	score.setAttributeNS(null, 'font-famly', 'Silksreen Web', 'monotype');
	score.setAttributeNS(null, 'font-size', this.size);
	score.setAttributeNS(null, 'fill', this.fill);
	score.textContent = scoreCount;

	svg.appendChild(score);
	}
}
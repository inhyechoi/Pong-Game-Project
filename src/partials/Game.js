//can leave .js off
import { SVG_NS,KEYS } from '../settings';

import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Gameover from './Gameover';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 90;
		this.radius = 8;
		

		this.gameElement = document.getElementById(this.element);

		this.pause = false;

		this.board = new Board(this.width, this.height);

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			this.fill = '#78b1ed'
		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,    
			this.paddleHeight,
			(this.width - this.boardGap - (this.paddleWidth + 10)),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			this.fill = '#ff995e'
		);
 
		this.ball = new Ball(
			this.radius,
			this.width, 
			this.height
		);

		this.newball = new Ball(
			this.radius,
			this.width,
			this.height
		);


		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar: 
				this.pause =!this.pause;
				break;

				case KEYS.b:
				this.newball.radius =20;
				break;

				case KEYS.n:
				this.createNewBall = true;
				break;
			}
		
		});

		this.player1Score = new Score (272, 40, 40, this.fill = '#ff995e');
		this.player2Score = new Score (212, 40, 40, this.fill = '#78b1ed');
		this.win = new Gameover((this.width / 2)-190, (this.height / 2), 50, this.fill = '#6d6e70');
 
	}

	render() {
		
		if (this.pause){
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		
		this.player1.render(svg);
		this.player2.render(svg);

		this.player1Score.render(svg, this.player1.score);
		this.player2Score.render(svg, this.player2.score);
		
		this.ball.render(svg, this.player1, this.player2);

		if (this.createNewBall){
			this.newball.render(svg, this.player1, this.player2);
			return;
		}

		if (this.player1.score === 6) {
			this.win.render(svg, 'player 1 win');
			this.pause = true;
			document.addEventListener('keydown', event => {
				switch (event.keyCode) {
					case KEYS.g:
						this.player1.score = 0;
						this.player2.score = 0;
						this.newball = false;
						this.pause = false;
				}
			});
		}

		if (this.player2.score === 6) {
			this.win.render(svg, 'player 2 win');
			this.pause = true;
			document.addEventListener('keydown', event => {
				switch (event.keyCode) {
					case KEYS.g:
						this.player1.score= 0;
						this.player2.score = 0;
						this.newball = false;
						this.pause = false;
				}
			});
		}
	}
}
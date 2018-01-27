import { IDatum2d } from '../types/data';

export default function getFlipData(n: number, prob: number, strategy: string): IDatum2d[] {
	const data = [{x: 0, y: 0}];
	let net = 0;
	let bet = 1;

	switch (strategy) {
		case 'martingale':
			for (let i = 1; i <= n; i++) {
				const win = Math.random() > 1 - prob;

				if (win) {
					net += bet;
					bet = 1;
				} else {
					net -= bet;
					bet *= 2;
				}

				data.push({
					x: i,
					y: net,
				});
			}

			break;

		case 'anti-martingale':
			for (let i = 1; i <= n; i++) {
				const win = Math.random() > 1 - prob;

				if (win) {
					net += bet;
					bet *= 2;
				} else {
					net -= bet;
					bet = 1;
				}

				data.push({
					x: i,
					y: net,
				});
			}

			break;

		default:
			for (let i = 1; i <= n; i++) {
				const win = Math.random() > 1 - prob;

				if (win) {
					net += bet;
				} else {
					net -= bet;
				}

				data.push({
					x: i,
					y: net,
				});
			}

			break;
	}

	return data;
}

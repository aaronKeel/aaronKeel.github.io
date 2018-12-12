import {
	IGraphLink,
	IGraphNode,
} from '../index';
import {
	quoRem,
} from './number';

export function generateNodes(numberOfNodes: number, numberOfGroups: number): IGraphNode[] {
	if (numberOfNodes > (26 * 26)) {
		throw new Error('too many nodes!');
	}

	if (numberOfGroups > 20) {
		throw new Error('only 20 groups allowed');
	}

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const nodes = [];

	for (let i = 0; i < numberOfNodes; i++) {
		const [ quotient, remainder ] = quoRem(alphabet.length, i);
		let id = 'id-';
		const group = `grp-${i % numberOfGroups}`;

		if (quotient) {
			id = id + alphabet[quotient - 1];
		}

		id = id + alphabet[remainder];

		nodes.push({ id, group });
	}

	return nodes;
}

export function generateLinks(graphNodes: IGraphNode[], probabilityOfLink = 0.5): IGraphLink[] {
	const links = [];
	for (let i = 0; i < graphNodes.length - 1; i++) {
		for (let j = i + 1; j < graphNodes.length; j++) {
			if (Math.random() < probabilityOfLink) {
				const value = Math.floor(Math.random() * 10) + 1;
				const NODE_0 = graphNodes[i];
				const NODE_1 = graphNodes[j];

				links.push({ source: NODE_0.id, target: NODE_1.id, value });
				links.push({ source: NODE_1.id, target: NODE_0.id, value });
			}
		}
	}

	return links;
}

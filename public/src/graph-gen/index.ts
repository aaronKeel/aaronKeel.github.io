import * as d3 from 'd3';

import {
	generateLinks,
	generateNodes,
} from './utils/graph';

export interface IGraphNode {
	id: string;
	group: string;
}

export interface IGraphLink {
	source: string;
	target: string;
	value: number;
}

export interface IGraph {
	nodes: IGraphNode[];
	links: IGraphLink[];
}

export default class GraphGenerator {
	private alphabet: string;

	constructor() {
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	private generateGraph(numberOfNodes: number, numberOfGroups: number): IGraph {
		const nodes = generateNodes(numberOfNodes, numberOfGroups);
		const links = generateLinks(nodes);

		return {
			links,
			nodes,
		};
	}
}

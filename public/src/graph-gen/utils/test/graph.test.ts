import { expect } from 'chai';

import { generateLinks, generateNodes } from '../graph';

describe('Graph utils', () => {
	describe('generateNodes', () => {
		it('generates a list of graph nodes', () => {
			const result = generateNodes(3, 2);
			expect(result).to.have.length(3);
			result.forEach((node) => {
				expect(node).to.have.property('id');
				expect(node).to.have.property('group');
			});
		});
	});

	describe('generateLinks', () => {
		it('generates a list of graph links', () => {
			const testNodes = generateNodes(3, 2);
			const result = generateLinks(testNodes, 1);
			expect(result).to.have.length(6);
			result.forEach((link) => {
				expect(link).to.have.property('source');
				expect(link).to.have.property('target');
				expect(link).to.have.property('value');
			});
		});
	});
});

import * as d3 from 'd3';

import {
	IAttr,
} from '../types/attrs';

import {
	D3Selection,
} from '../types/d3-types';

export default function appendElement(targetElement: string, elementType: string, attrs: IAttr) {
	const sel = d3.select(targetElement)
		.append(elementType);

	for (const attr in attrs) {
		sel.attr(attr, attrs[attr]);
	}

	return sel;
}

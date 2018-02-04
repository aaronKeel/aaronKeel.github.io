import * as d3 from 'd3';

import appendLabeledSelect, { IOption } from '../components/select/select';
import {
	D3Selection,
} from '../types/d3-types';

export default class App {
	private componentSelections: D3Selection[];
	private targetSelection: D3Selection;

	constructor(targetId: string) {
		this.targetSelection = d3.select(targetId);
		this.componentSelections = [];
	}

	addComponent(selection: D3Selection) {
		this.componentSelections.push(selection);
	}

	init() {
		const selectOptions = [
			{
				text: 'foo',
				value: 123,
			},
			{
				text: 'bar',
				value: 567,
			},
		];

		const selectHandler = (datum: IOption) => {
			console.log(datum);
		};

		this.addComponent(appendLabeledSelect(this.targetSelection, 'example', 'foopee', selectOptions, selectHandler, ));
	}
}

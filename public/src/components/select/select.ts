import * as d3 from 'd3';
import {
	D3Selection,
} from '../../types/d3-types';

export interface IOption {
	text: string;
	value: any;
}

interface IOptionDict {
	[option: string]: IOption;
}

export default function appendLabeledSelect(
	target: D3Selection,
	label: string,
	labelText: string,
	options: IOption[],
	onChange: (datum: IOption) => void,
	labelClass?: string
): D3Selection {
	const optionDict: IOptionDict = options.reduce((dict: IOptionDict, option) => {
		dict[option.text] = option;
		return dict;
	}, {});

	const labeledComponent = target.append('label')
			.attr('for', label)
			.text(labelText);

	if (labelClass) {
		labeledComponent.classed(labelClass, true);
	}

	labeledComponent.append('select')
			.attr('id', label)
			.on('change', function(d, i) {
				const value = d3.select(this).property('value');
				onChange(optionDict[value]);
			})
		.selectAll('option')
			.data(options)
			.enter()
		.append('option')
			.html((d) => d.text);

	return labeledComponent;
}

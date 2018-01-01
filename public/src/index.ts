import * as d3 from 'd3';

import LineChart from './line-chart';
import { IDatum2d } from './types/data';
import getFlipData from './utils/get-flip-data';

const lineChart = new LineChart();

const target = '#page';

d3.select(target).html('<p>Krampus</p>');

const controlsContainer = d3.select(target).append('div');

let prob = 0.5;
let n = 100;
let strategy = 'default';

controlsContainer.append('button')
		.text('Regenerate')
		.on('click', () => {
			lineChart.update(getFlipData(n, prob, strategy));
		});

controlsContainer.append('label')
		.attr('for', 'probability')
		.text('probability:')
		.style('margin-left', '1em')
	.append('input')
		.attr('id', 'probability')
		.attr('type', 'number')
		.attr('value', prob)
		.attr('min', 0)
		.attr('max', 1)
		.attr('step', 0.005)
		.on('change', function() { 
			prob = d3.select(this).property('value');
		});

controlsContainer.append('label')
		.attr('for', 'n')
		.text('n:')
		.style('margin-left', '1em')
	.append('input')
		.attr('id', 'n')
		.attr('type', 'number')
		.attr('value', n)
		.attr('min', 2)
		.attr('max', 5000)
		.attr('step', 1)
		.on('change', function() { 
			n = d3.select(this).property('value');
		});

const selectStrategy = controlsContainer.append('label')
		.attr('for', 'strategy')
		.text('strategy:')
		.style('margin-left', '1em')
	.append('select')
		.attr('id', 'strategy')
		.on('change', function() { 
			strategy = d3.select(this).property('value');
		});

const options = selectStrategy.selectAll('option')
		.data(['default', 'martingale', 'anti-martingale'])
		.enter()
	.append('option')
		.text((d)=> d);

lineChart.render(target, getFlipData(n, prob, strategy));

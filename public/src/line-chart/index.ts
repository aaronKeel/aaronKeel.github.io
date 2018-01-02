import * as d3 from 'd3';

import {
	D3Area,
	D3Axis,
	D3Line,
	D3ScaleLinear,
	D3ScalePoint,
	D3Selection,
} from '../types/d3-types';
import {
	IDatum2d,
} from '../types/data';

import appendElement from '../utils/append-element';
import getExtent from '../utils/get-extent';

export default class LineChart {
	posArea: D3Area;
	posAreaPath: D3Selection;
	negArea: D3Area;
	negAreaPath: D3Selection;
	line: D3Line;
	linePath: D3Selection;
	g: D3Selection;
	height: number;
	margin: {
		bottom: number;
		left: number;
		right: number;
		top: number;
	};
	svg: D3Selection;
	width: number;
	xScale: D3ScalePoint;
	xAxis: D3Selection;
	xAxisCall: D3Axis;
	yScale: D3ScaleLinear;
	yAxis: D3Selection;
	yAxisCall: D3Axis;

	constructor() {
		this.margin = {
			bottom: 30,
			left: 90,
			right: 30,
			top: 30,
		};
		this.height = 500;
		this.width = 960;
	}

	update(data: IDatum2d[]) {
		const { 
			height, 
			width,
			xScale,
			xAxis,
			xAxisCall,
			yScale,
			yAxis,
			yAxisCall,
			linePath,
			posArea,
			posAreaPath,
			negArea,
			negAreaPath,
		} = this;

		xScale.domain(data.map((d) => String(d.x)));
		xAxisCall.scale(xScale)
				.tickValues(data.filter((d, i, a) =>  i % Math.ceil(a.length / 10) === 0).map((d) => d.x));

		yScale.domain(getExtent(data, (d) => d.y));
		yAxisCall.scale(yScale);

		xAxis.transition()
	      .call(xAxisCall);

		yAxis.transition()
	      .call(yAxisCall);

	  linePath.datum(data).transition()
    		.attr("d", this.line);

    posArea.y0(this.yScale(0));

    negArea.y1(this.yScale(0));

    posAreaPath.datum(data).transition()
    		.attr('d', this.posArea);

    negAreaPath.datum(data).transition()
    		.attr('d', this.negArea);
	}
	
	render(targetElement: string, data: IDatum2d[]) {
		const { 
			height, 
			width,
		} = this;

		this.svg = appendElement(targetElement, 'svg', {
			width: width + this.margin.left + this.margin.right,
			height: height + this.margin.top + this.margin.bottom,
		});

		this.g = this.svg
			.append("g")
				.attr("transform", `translate(${this.margin.left},${this.margin.top})`);

		this.xScale = d3.scalePoint()
				.align(0)
				.domain(data.map((d) => String(d.x)))
		    .range([0, width]);

		this.yScale = d3.scaleLinear()
				.domain(getExtent(data, (d) => d.y))
		    .rangeRound([height, 0]);

		this.line = d3.line<IDatum2d>()
    		.x((d) => this.xScale(d.x) || 0)
    		.y((d) => this.yScale(d.y || 0));

    this.posArea = d3.area<IDatum2d>()
    		.x((d) => this.xScale(d.x) || 0)
    		.y0(this.yScale(0))
    		.y1((d) => this.yScale(d.y > 0 ? d.y : 0));

    this.negArea = d3.area<IDatum2d>()
    		.x((d) => this.xScale(d.x) || 0)
    		.y1(this.yScale(0))
    		.y0((d) => this.yScale(d.y < 0 ? d.y : 0));

    this.xAxisCall = d3.axisBottom(this.xScale).tickValues(data.filter((d, i, a) =>  i % Math.ceil(a.length / 10) === 0).map((d) => d.x));

    this.xAxis = this.g.append("g")
	      .attr("transform", `translate(0,${height})`)
	      .call(this.xAxisCall);

	  this.yAxisCall = d3.axisLeft(this.yScale);

		this.yAxis = this.g.append("g")
	      .call(this.yAxisCall);

	  this.yAxis.append("text")
	      .attr("fill", "#000")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", "0.71em")
	      .attr("text-anchor", "end")
	      .text("Net ($)");

    this.posAreaPath = this.g.append('path')
    		.datum(data)
    		.attr('fill', 'rgba(0, 0, 255, 0.3)')
    		.attr('stroke', 'none')
    		.attr('d', this.posArea);

    this.negAreaPath = this.g.append('path')
    		.datum(data)
    		.attr('fill', 'rgba(0, 0, 255, 0.5)')
    		.attr('stroke', 'none')
    		.attr('d', this.negArea);

	  this.linePath = this.g.append("path")
	      .datum(data)
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-linejoin", "round")
	      .attr("stroke-linecap", "round")
	      .attr("stroke-width", 1.5)
	      .attr("d", this.line);
	}
}
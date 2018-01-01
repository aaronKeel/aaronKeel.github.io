import * as d3 from 'd3';

export default function getExtent<T>(data: T[], accessorFn: (datum: T) => number): [number, number] {
	const [min, max] = d3.extent(data, accessorFn);

	return [
		min === undefined ? 0 : Number(min), 
		max === undefined ? 1 : Number(max),
	];
}

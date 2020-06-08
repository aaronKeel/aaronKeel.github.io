import * as React from 'react';

import './style.scss';

export interface PointData {
    groupKey: string;
    fill: string;
    radius: number;
    positions: number[][];
}
export interface ChartConfig {
    height: number;
    width: number;
    padding: number;
    backgroundFill: string;
    data: PointData[];
    title: string;
}
export interface PointChartWrapperProps { className: string; }
export interface PointChartProps { config: ChartConfig; }

const cMin = (data: PointData[], i: number): number => data.reduce<number>((acc, { positions }) => Math.min(acc, ...positions.map(d => d[i])), Infinity);
const cMax = (data: PointData[], i: number): number => data.reduce<number>((acc, { positions }) => Math.max(acc, ...positions.map(d => d[i])), -Infinity);

type Scale = (v: number) => number;
const getScale = (d0: number, d1: number, r0: number, r1: number) => (v: number): number => {
    const t = (v - d0) / (d1 - d0);
    return r1 * t + r0 * (1 - t);
};

const pointGroup = (data: PointData, x: Scale, y: Scale, padding: number): JSX.Element => (
    <g key={data.groupKey} transform={`translate(${padding} ${padding})`}>
        {data.positions.map(([px, py], i) => (
            <circle
                key={`${i}-${px}-${py}`}
                cx={x(px)}
                cy={y(py)}
                r={data.radius}
                fill={data.fill}
            />
        ))}
    </g>
);

export const PointChart = ({ config }: PointChartProps): JSX.Element => {
    const { height, width, padding, backgroundFill, data, title } = config;
    const dataWidth = width - 2 * padding;
    const dataHeight = height - 2 * padding;
    const xm = cMin(data, 0);
    const xM = cMax(data, 0);
    const ym = cMin(data, 1);
    const yM = cMax(data, 1);

    const x = getScale(xm, xM, 0, dataWidth);
    const y = getScale(ym, yM, dataHeight, 0);

    return (
        <div className='chart-container'>
            <svg className='chart-svg' width={width} height={height} >
                <rect width={width} height={height} fill={backgroundFill} />
                {data.map(d => pointGroup(d, x, y, padding))}
            </svg>
            <div className='chart-title' style={{ width }}><span className='chart-title--quote'>{'"'}</span>{title}<span className='chart-title--quote'>{'"'}</span></div>
        </div>
    );
};

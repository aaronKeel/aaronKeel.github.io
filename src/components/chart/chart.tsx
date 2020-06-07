import * as React from 'react';

import './style.scss';

export interface ChartWrapperProps { className: string; }
export interface ChartProps extends ChartWrapperProps { data: string; }

const x = (v: number, n: number, w: number): number => (v * w * 0.8) / n + w * 0.1;
const y = (v: number, M: number, m: number, h: number): number => (M - v) / (M - m) * h * 0.8 + h * 0.1;

export const Chart = ({ className, data }: ChartProps): JSX.Element => {
    const height = 500;
    const width = 600;

    const [, ...rows] = data.split('\n');
    const mat: number[][] = rows.reduce((acc, row) => {
        acc.push(row.split(',').map(d => +d));
        return acc;
    }, []);
    const dMax = Math.max(...mat.map(d => +d[3]));
    const dMin = Math.min(...mat.map(d => +d[2]));

    return (
        <div className={className}>
            <div className='chart-container'>
                <svg width={width} height={height} >
                    {
                        mat.reduce((acc, row, r, a) => {
                            const cx = x(r, a.length, width);
                            const cym = y(row[1], dMax, dMin, height);
                            const cyl = y(row[2], dMax, dMin, height);
                            const cyu = y(row[3], dMax, dMin, height);
                            return [
                                ...acc,
                                <circle key={`${r}-${row[1]}`} cx={cx} cy={cym} r={3} fill='#DE6600' />,
                                <circle key={`${r}-${row[2]}`} cx={cx} cy={cyl} r={1} fill='#FEA02F' />,
                                <circle key={`${r}-${row[3]}`} cx={cx} cy={cyu} r={1} fill='#FEA02F' />,
                            ];
                        }, [])
                    }
                </svg>
            </div>
        </div>
    );
};

import * as React from 'react';

import { PointChart, PointChartWrapperProps, ChartConfig, PointData } from './point-chart';

import data from '../../content/global-health-spending.csv';

export const GlobalHealthSpending = ({ className }: PointChartWrapperProps): JSX.Element => {
    const [, ...rows] = data.split('\n');
    const dRows = rows.map(s => s.split(',').map(d => +d));

    const positionsA = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[0], row[1]]);
        return acc;
    }, []);
    const positionsB = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[0], row[2]]);
        return acc;
    }, []);
    const positionsC = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[0], row[3]]);
        return acc;
    }, []);

    const pointData: PointData[] = [
        {
            groupKey: 'A',
            fill: '#de6600',
            radius: 3,
            positions: positionsA,
        },
        {
            groupKey: 'B',
            fill: '#fea02f',
            radius: 1,
            positions: positionsB,
        },
        {
            groupKey: 'C',
            fill: '#fea02f',
            radius: 1,
            positions: positionsC,
        },
    ];

    const config: ChartConfig = {
        height: 500,
        width: 600,
        padding: 50,
        backgroundFill: '#003f5a',
        data: pointData,
    };

    return (
        <PointChart
            className={className}
            config={config}
        />
    );
};

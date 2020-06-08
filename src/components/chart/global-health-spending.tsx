import * as React from 'react';

import { PointChart, PointChartWrapperProps, ChartConfig, PointData } from './point-chart';

import data from '../../content/global-health-spending.csv';

export const GlobalHealthSpending = ({ className }: PointChartWrapperProps): JSX.Element => {
    const [, ...rows] = data.split('\n');
    const dRows = rows.map(s => s.split(',').map(d => +d));

    // year X the_total_ppp
    const positionsA = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[2], row[3]]);
        return acc;
    }, []);
    const positionsB = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[2], row[4]]);
        return acc;
    }, []);
    const positionsC = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[2], row[5]]);
        return acc;
    }, []);

    // the_total_ppp X the_per_cap_ppp
    const positionsD = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[3], row[6]]);
        return acc;
    }, []);
    const positionsE = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[4], row[7]]);
        return acc;
    }, []);
    const positionsF = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[5], row[8]]);
        return acc;
    }, []);

    // the_total_ppp X the_per_gdp
    const positionsG = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[3], row[9]]);
        return acc;
    }, []);
    const positionsH = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[4], row[10]]);
        return acc;
    }, []);
    const positionsI = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[5], row[11]]);
        return acc;
    }, []);

    // the_per_gdp X the_per_cap_ppp
    const positionsJ = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[9], row[6]]);
        return acc;
    }, []);
    const positionsK = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[9], row[7]]);
        return acc;
    }, []);
    const positionsL = dRows.reduce<number[][]>((acc, row) => {
        acc.push([row[10], row[8]]);
        return acc;
    }, []);

    const pointDataA: PointData[] = [
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
        {
            groupKey: 'Z',
            fill: '#003f5a',
            radius: 0,
            positions: positionsC.map(([px]) => [px, 0]),
        },
    ];

    const pointDataB: PointData[] = [
        {
            groupKey: 'D',
            fill: '#de6600',
            radius: 3,
            positions: positionsD,
        },
        {
            groupKey: 'E',
            fill: '#fea02f',
            radius: 1,
            positions: positionsE,
        },
        {
            groupKey: 'F',
            fill: '#fea02f',
            radius: 1,
            positions: positionsF,
        },
        {
            groupKey: 'ZZ',
            fill: '#003f5a',
            radius: 0,
            positions: [[0, 0]],
        },
    ];

    const pointDataC: PointData[] = [
        {
            groupKey: 'G',
            fill: '#de6600',
            radius: 3,
            positions: positionsG,
        },
        {
            groupKey: 'H',
            fill: '#fea02f',
            radius: 1,
            positions: positionsH,
        },
        {
            groupKey: 'I',
            fill: '#fea02f',
            radius: 1,
            positions: positionsI,
        },
        {
            groupKey: 'ZZZ',
            fill: '#003f5a',
            radius: 0,
            positions: [[0, 0]],
        },
    ];

    const pointDataD: PointData[] = [
        {
            groupKey: 'J',
            fill: '#de6600',
            radius: 3,
            positions: positionsJ,
        },
        {
            groupKey: 'K',
            fill: '#fea02f',
            radius: 1,
            positions: positionsK,
        },
        {
            groupKey: 'L',
            fill: '#fea02f',
            radius: 1,
            positions: positionsL,
        },
        {
            groupKey: 'ZZZZ',
            fill: '#003f5a',
            radius: 0,
            positions: [[0, 0]],
        },
    ];

    const configA: ChartConfig = {
        height: 500,
        width: 600,
        padding: 50,
        backgroundFill: '#003f5a',
        data: pointDataA,
        title: 'Year X Total',
    };

    const configB: ChartConfig = {
        height: 500,
        width: 600,
        padding: 50,
        backgroundFill: '#003f5a',
        data: pointDataB,
        title: 'Total X Per Cap',
    };

    const configC: ChartConfig = {
        height: 500,
        width: 600,
        padding: 50,
        backgroundFill: '#003f5a',
        data: pointDataC,
        title: 'Total X Per GDP',
    };

    const configD: ChartConfig = {
        height: 500,
        width: 600,
        padding: 50,
        backgroundFill: '#003f5a',
        data: pointDataD,
        title: 'Per GDP X Per Cap',
    };

    return (
        <div className={className}>
            <PointChart
                config={configA}
            />
            <PointChart
                config={configB}
            />
            <PointChart
                config={configC}
            />
            <PointChart
                config={configD}
            />
        </div>
    );
};

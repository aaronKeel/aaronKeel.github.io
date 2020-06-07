import * as React from 'react';

import { Chart, ChartWrapperProps } from './chart';

import data from '../../content/global-health-spending.csv';

export const GlobalHealthSpending = ({ className }: ChartWrapperProps): JSX.Element => <Chart className={className} data={data} />;

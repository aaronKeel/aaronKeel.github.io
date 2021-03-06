export interface QuarterEarnings {
    quarter: number;
    earnings: number;
}

const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
];

const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
];

const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
];

export class Store {
    private data: QuarterEarnings[][] = [];

    public fetchData(): Promise<QuarterEarnings[][]> {
        return new Promise((resolve) => {
            if (this.data.length === 0) {
                setTimeout(() => {
                    this.data = [
                        data2012,
                        data2013,
                        data2014,
                        data2015,
                    ];
                    resolve(this.data);
                }, 500);
            } else {
                resolve(this.data);
            }
        });
    }
}

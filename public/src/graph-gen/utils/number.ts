export function quoRem(divisor: number, dividend: number): number[] {
	return [Math.floor(dividend / divisor), dividend % divisor];
}

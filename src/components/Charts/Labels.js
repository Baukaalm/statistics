import React from 'react';
import { Sector } from 'recharts';

const renderLabelsShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		textAnchor,
		value,
		id,
		payload
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + outerRadius * cos;
	const my = cy + outerRadius * sin;
	const ex = mx + (cos >= 0 ? 1 : -1);
	const ey = my;
	console.info(payload.total)
	return (
		<g>
			<text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={'#fff'}>
				{payload.total}
			</text>
			<text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill={'#ccc'}>
				{'balance'}
			</text>

			{id !== 'empty' && <circle cx={ex} cy={ey} r={10} fill={'transparent'} stroke="#fff" />}
			{id !== 'empty' && <circle cx={ex} cy={ey} r={3} fill={'#fff'} stroke="none" />}
		</g>
	);
};

export default renderLabelsShape;

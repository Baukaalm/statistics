import React from 'react';

import { Sector } from 'recharts';

const renderActiveShape = (props) => {
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
	return (
		<g>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<linearGradient id="gradient-purple" x2="0" y2="1">
				<stop offset="0%" stopColor="#8d4de8" />
				<stop offset="100%" stopColor="#ff2366" />
			</linearGradient>

			<linearGradient id="gradient-cyan" x2="0" y2="1">
				<stop offset="0%" stopColor="#6956ec" />
				<stop offset="100%" stopColor="#56b2ba" />
			</linearGradient>
			<linearGradient id="gradient-till" x2="0" y2="1">
				<stop offset="0%" stopColor="#fd3f2f" />
				<stop offset="100%" stopColor="#face15" />
			</linearGradient>
			{id !== 'empty' && <circle cx={ex} cy={ey} r={10} fill={'#fff'} stroke="none" />}
		</g>
	);
};

export default renderActiveShape;

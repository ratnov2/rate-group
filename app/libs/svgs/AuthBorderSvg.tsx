import * as React from 'react'

const AuthBorderSvg = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={369}
		height={63}
		fill='none'
		{...props}
	>
		<path
			stroke='url(#a)'
			strokeWidth={2}
			d='M179.5 1H353c8.284 0 15 6.716 15 15v31c0 8.284-6.716 15-15 15H16C7.716 62 1 55.284 1 47V16C1 7.716 7.716 1 16 1'
		/>
		<defs>
			<linearGradient
				id='a'
				x1={184.5}
				x2={184.5}
				y1={1}
				y2={62}
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#86EAD7' />
				<stop offset={1} stopColor='#34ACE0' />
			</linearGradient>
		</defs>
	</svg>
)
export default AuthBorderSvg

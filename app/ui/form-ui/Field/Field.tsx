import { Input, Stack, TextField, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import cn from 'classnames'
import React, { FC, InputHTMLAttributes } from 'react'

import { TypeFieldProps } from './field.interface'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	type: string
	textLabel: string
	error?: string
	sharedStyle?: string
}

const Field = React.forwardRef<HTMLInputElement, Props>(
	({ type, textLabel, error, sharedStyle, ...rest }, ref) => {
		return (
			<StyledField className={cn(sharedStyle)}>
				<label>{textLabel}</label>
				<StyledFieldInput
					ref={ref}
					type={type}
					{...rest}
					className={cn(error)}
				/>
				{error && <span>{error}</span>}
			</StyledField>
		)
	}
)

const StyledField = styled(Stack)(({ theme }) => ({
	backgroundColor: 'white',
	borderRadius: 15,
	border: '1px solid black',
	position: 'relative',
	'& label': {
		position: 'absolute',
		backgroundColor: 'white',
		left: 10,
		top: -10,
		padding: theme.spacing(0, 2, 0, 0.5)
	}
	// '&::before': {
	// 	content: '""',
	// 	position: 'absolute',
	// 	inset: 0,
	// 	borderRadius: 15,
	// 	padding: 10,
	// 	background: 'linear-gradient(45deg,red,blue)',
	// 	mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
	// 	// maskComposite: 'xor',
	// 	maskComposite: 'exclude',
	// 	zIndex:-1,
	// 	transform:'scale(1.01)'
	// 	// }
	// }
}))

const StyledFieldInput = styled(Input)(({ theme }) => ({
	borderRadius: 1,
	padding: theme.spacing(2)
}))

export default Field

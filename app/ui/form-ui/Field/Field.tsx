// @ts-nocheck
import {
	Input,
	InputProps,
	Stack,
	TextField,
	Typography,
	styled
} from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import cn from 'classnames'
import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'
import { IMask, IMaskInput } from 'react-imask'

import { TypeFieldProps } from './field.interface'
import AuthBorderSvg from '@/libs/svgs/AuthBorderSvg'

interface Props extends InputHTMLAttributes<InputProps> {
	type: string
	textLabel: string
	error?: string
	sharedStyle?: string
}
const mask = [
	{ mask: '{55} 0000-0000' },
	{ mask: '(44) 00-00-0000' }
	// { mask: '(375) 00000-0000' },
	// { mask: '(00) 00000-0000' }
]
//const PhoneMask = '+00 {21} 0 000 0000'
const PhoneMask = [
	{
		mask: '+00 {21} 0 000 0000',
		startsWith: '30',
		lazy: false,
		country: 'Greece'
	},
	{
		mask: '+0 000 000-00-00',
		startsWith: '7',
		lazy: false,
		country: 'Russia'
	},
	{
		mask: '+00-0000-000000',
		startsWith: '91',
		lazy: false,
		country: 'India'
	}
]

const Field = React.forwardRef<HTMLInputElement, Props>(
	({ type, textLabel, error, sharedStyle, ...rest }, ref) => {
		// const mask = IMask(ref, maskOptions)
		const [ref2, setRef] = useState()
		console.log(ref2)
		const maskOptions = {
			mask: [
				{
					mask: '+00 {21} 0 000 0000',
					startsWith: '30',
					lazy: false,
					country: 'Greece'
				},
				{
					mask: '+0 000 000-00-00',
					startsWith: '7',
					lazy: false,
					country: 'Russia'
				},
				{
					mask: '+00-0000-000000',
					startsWith: '91',
					lazy: false,
					country: 'India'
				},
				{
					mask: '0000000000000',
					startsWith: '',
					country: 'unknown'
				}
			],
			dispatch: (appended, dynamicMasked) => {
				const number = (dynamicMasked.value + appended).replace(
					/\D/g,
					''
				)

				return dynamicMasked.compiledMasks.find(
					m => number.indexOf(m.startsWith) === 0
				)
			}
		}
		let mask
		useEffect(() => {
			if (!!ref) {
				//mask = IMask(ref, maskOptions)
			}
		}, [ref])
		return (
			<StyledField className={cn(sharedStyle)}>
				<StyledStackInput>
					<label>
						<Typography variant='subtitle1'>{textLabel}</Typography>
					</label>
					<input
						ref={ref}
						mask={mask}
						type={type}
						{...rest}
						placeholder='8 916 777 77 77'
					/>
				</StyledStackInput>

				{/* <StyledFieldInput
					ref={ref}
					type={type}
					{...rest}
					className={cn(error)}
				/> */}
				{error && <span>{error}</span>}
			</StyledField>
		)
	}
)

const StyledField = styled(Stack)(({ theme }) => ({
	backgroundColor: 'white',
	borderRadius: 15,
	position: 'relative',
	'& label': {
		position: 'absolute',
		backgroundColor: 'white',
		left: 10,
		top: -10,
		padding: theme.spacing(0, 2, 0, 0.5),
		color: theme.palette.background.neutral
	},

	'& input': {
		padding: 10,
		width: '100%',
		height: '100%',
		borderRadius: 10,
		border: 'none',
		backgroundColor: 'white',
		'&:focus-visible': {
			outline: 'none'
		},
		'&::placeholder': {
			color: theme.palette.background.neutral
		}
	}
}))

const StyledStackInput = styled(Stack)(({ theme }) => ({
	padding: 2,
	display: 'inline-block',
	margin: '75px 0',
	position: 'relative',
	zIndex: 0,
	'&::before': {
		content: '""',
		position: 'absolute',
		zIndex: -1,
		inset: 0,
		padding: 5,
		borderRadius: 10,

		background: 'linear-gradient(to bottom, #86EAD7, #34ACE0)',

		mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
		maskComposite: 'exclude'
	}
}))

const StyledFieldInput = styled(Input)(({ theme }) => ({
	borderRadius: 1,
	padding: theme.spacing(2)
}))

export default Field

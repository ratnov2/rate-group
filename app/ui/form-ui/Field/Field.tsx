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
import React, {
	FC,
	ForwardedRef,
	InputHTMLAttributes,
	useEffect,
	useState
} from 'react'
import { IMask, IMaskInput } from 'react-imask'
import ReactInputMask from 'react-input-mask'

import { NumberMask } from '@/utils/auth-mask/auth-mask'

import { TypeFieldProps } from './field.interface'
import AuthBorderSvg from '@/libs/svgs/AuthBorderSvg'

interface Props extends InputHTMLAttributes<InputProps> {
	type: string
	textLabel?: string
	error?: string
	sharedStyle?: string
	placeholder?: string
	typeMask?: (value: string, ref: ForwardedRef<HTMLInputElement>) => void
}

const Field = React.forwardRef<HTMLInputElement, Props>(
	(
		{ type, textLabel, error, sharedStyle, placeholder, typeMask, ...rest },
		ref
	) => {
		// const [state, setState] = useState({ mask: '99999999999', value: '' })
		return (
			<StyledField>
				<StyledStackInput className={cn(sharedStyle)}>
					<label>
						<Typography variant='subtitle1'>{textLabel}</Typography>
					</label>
					{/* <ReactInputMask
						{...state}
						ref={ref}
						maskChar={null}
						onChange={e => {
							onChange(e)
							if (!!typeMask)
								setState(typeMask(e.currentTarget.value, e))
						}}
						{...rest}
					/> */}
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
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
	//for cube
}))

const StyledStackInput = styled(Stack)(({ theme }) => ({
	padding: 2,
	display: 'inline-block',
	margin: '15px 0',
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
	},
	'&.square ': {
		width: 80,
		height: 80,
		'& input': {
			fontSize: 40,
			textAlign: 'center'
		}
	}
}))

export default Field

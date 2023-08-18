import { Button, colors, styled } from '@mui/material'
import cn from 'classnames'
import React, { FC } from 'react'

import { TypeButtonProps } from './button.interface'

const ButtonSubmit: FC<TypeButtonProps> = ({
	children,
	className,
	onClick,
	disabled
}) => {
	return (
		<StyledButton onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	)
}

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: 15,
	background: 'linear-gradient(180deg, #86EAD7 16.98%, #34ACE0 100%)',
	padding: theme.spacing(1.5),
	cursor: 'pointer',
	color: 'black',
	textTransform: 'uppercase',
	'&.Mui-disabled': {
		cursor: 'not-allowed',
		background: theme.palette.action.disabledBackground
	}
}))

export default ButtonSubmit

// import Field from 'ui/form-ui/Field/Field'
import { InputMaskElement } from 'imask/esm/index'
import dynamic from 'next/dynamic'
import { FC, createRef, useEffect, useRef, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IMask, IMaskInput } from 'react-imask'

import { IAuthFormData, IAuthPhone } from '@/shared/types/auth.interface'

import { pattern, validatePhoneNumber } from '@/utils/validate-phone-number'

import Field from 'ui/form-ui/Field/Field'

interface IAuthFields {
	register: UseFormRegister<IAuthPhone>
	isPassRequired?: boolean
	errors: FieldErrors<IAuthPhone>
	phoneText: string
	handlerText: (phone: string) => void
}

// const Dy = dynamic(() => import('ui/form-ui/Field/Field'), { ssr: false })

const PhoneField: FC<IAuthFields> = ({
	register,
	isPassRequired,
	errors,
	handlerText,
	phoneText
}) => {
	// const maskOptions = {
	// 	mask: '+{7}(000)000-00-00'
	// }
	// let mask = '+{7}(000)000-00-00'
	// console.log('ref', ref)
	// if (!!ref) {
	// 	console.log('wefweff')

	// 	mask = IMask(ref, maskOptions)
	// }
	const ref = createRef<any>()
	console.log('drode', ref)
	const [ref2, setRef] = useState<any>()
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
		dispatch: (appended: any, dynamicMasked: any) => {
			const number = (dynamicMasked.value + appended).replace(/\D/g, '')

			return dynamicMasked.compiledMasks.find(
				(m: any) => number.indexOf(m.startsWith) === 0
			)
		}
	}
	let mask
	useEffect(() => {
		if (!!ref2) {
			mask = IMask(ref2, maskOptions)
		}
	}, [ref])
	const mark = {
		mask: '+00 {21} 0 000 0000',
		startsWith: '30',
		lazy: false,
		country: 'Greece'
	}
	const numberPipe = IMask.createPipe({
		...mark
	})
	const [ff1, ff2] = useState('')

	// useEffect(() => {
	// 	if (ref) {
	// 		const mask = IMask(ref as unknown as InputMaskElement, maskOptions)
	// 	}
	// }, [])
	// `numberPipe` is just a function, call it to format values
	// "1,00"

	// if `numberPipe` will not be reused, then just use `IMask.pipe` inplace:
	// IMask.pipe('1', {
	// 	mask: Number,
	// 	scale: 2,
	// 	thousandsSeparator: ' ',
	// 	normalizeZeros: true,
	// 	padFractionalZeros: true
	// })
	console.log(numberPipe('12'))

	return (
		<>
			<Field
				{...register('phone', {
					required: true
					// pattern: {
					// 	value: validatePhoneNumber,
					// 	message: 'This number is not a valid'
					// }
				})}
				type='tel'
				textLabel='Номер телефона'
				error={errors?.phone?.message}
				value={phoneText}
				onChange={e => handlerText(String(e.currentTarget.value))}
			/>
			{/* <input
				ref={ref}
				value={ff1}
				onChange={e => ff2(String(e.currentTarget.value))}
			/> */}
		</>
	)
}

export default PhoneField

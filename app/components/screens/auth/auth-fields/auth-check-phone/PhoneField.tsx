// import Field from 'ui/form-ui/Field/Field'
import dynamic from 'next/dynamic'
import { FC, useRef } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

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
	const ref = useRef<any>()
	console.log(ref);
	
	return (
		<Field
			{...register('phone', {
				required: true
				// pattern: {
				// 	value: validatePhoneNumber,
				// 	message: 'This number is not a valid'
				// }
			})}
			ref={ref}
			type='tel'
			textLabel='Номер телефона'
			error={errors?.phone?.message}
			// value={phoneText}
			// onChange={e => handlerText(String(e.currentTarget.value))}
		/>
	)
}

export default PhoneField

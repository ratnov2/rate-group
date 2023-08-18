const mask = {
	default: '9999999999',
	ru: '+9 (999) 999-99-99',
	test: '9999-999999-99999'
}

export const NumberMask = (value: string, e: any) => {
	console.log('EEEE', e.target.selectionEnd)

	let state = {
		mask: mask.default,
		value
	}
	if (/^75/.test(value)) {
		state.mask = mask.ru
		e.target.selectionStart = 6
		// ref
		// ref.setSelectionRange('3,5')
	}
	return state
}

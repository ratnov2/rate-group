import { useState } from 'react'

import { AuthService } from '@/services/auth/auth.service'

export default function Home() {
	const [state, setState] = useState('+79807052934')
	
	return (
		<div>
			<input
				type='text'
				value={state}
				onChange={e => setState(e.currentTarget.value)}
			/>
			<button onClick={() => AuthService.checkPhone(state)}>
				getPhone
			</button>
		</div>
	)
}

import React, { FC, FormEvent, useState } from 'react'
import { render } from 'react-dom'

const Container = styled.div`
	height: 100vw;
	padding: 10px;
	margin: 0;
`

const App: FC = () => {
	const [themeMode, setThemeMode] = useState('light')
	const [appearance, setAppearance] = useState('default')

	return <p>It renders nothing important. Just export some common interfaces.</p>
}

render(<App />, document.querySelector('#app'))

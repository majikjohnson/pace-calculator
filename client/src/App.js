import React from 'react';
import './App.css';
import 'typeface-roboto';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';

import Navbar from './components/layout/Navbar';
import Converter from './components/Converter';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Navbar />
				<Converter />
			</div>
		</ThemeProvider>
	);
}

export default App;

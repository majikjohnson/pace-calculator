import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
	},
	overrides: {
		MuiExpansionPanelSummary: {
			root: {
				backgroundColor: '#3f50b5',
				color: 'white',
			},
		},
		MuiExpansionPanelDetails: {
			root: {
				backgroundColor: '#757ce8',
				color: 'white'
			},
		},
		MuiFormLabel: {
			root: {
				color: 'white'
			}
		},
		MuiInputBase: {
			root: {
				color: 'white'
			}
		}
	},
});

export default theme;

import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
	return (
		<Fragment>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Pace Calculator
					</Typography>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

export default Navbar;
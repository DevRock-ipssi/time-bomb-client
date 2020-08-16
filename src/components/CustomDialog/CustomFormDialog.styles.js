import { makeStyles } from '@material-ui/core';

export const S_CustomFormDialog = makeStyles((theme) => ({
	titleAndIcon: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	closeButton: {
		color: '#333',
		height: '100%',
		verticalAlign: 'middle'
	},
	openBtnCreateRound: {
		backgroundColor: '#00f',
		color: '#fff',
		fontFamily: 'Roboto, Helvetica, sans-serif',
		position: 'fixed',
		top: '35%',
		right: 0,
		zIndex: 2
	},
	openBtnIntegrateRound: {
		backgroundColor: '#f00',
		color: '#fff',
		fontFamily: 'Roboto, Helvetica, sans-serif',
        position: 'fixed',
		top: '45%',
		right: 0,
		zIndex: 2
	}
}));

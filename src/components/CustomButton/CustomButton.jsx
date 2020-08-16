import React from 'react';

// Material-ui imports
import { Button, Typography } from '@material-ui/core';

const CustomButton = ({
	btnText = '',
	btnColor = 'primary',
	btnClassName = '',
	btnType = 'button',
	onClick = (f) => f
}) => {
	return (
		<Button onClick={onClick} color={btnColor} className={btnClassName} type={btnType}>
			<Typography>{btnText}</Typography>
		</Button>
	);
};

export default CustomButton;

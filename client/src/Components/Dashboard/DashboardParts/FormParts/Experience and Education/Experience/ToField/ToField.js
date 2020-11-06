// %React
import React from 'react';
// %Styling
import Grid from '@material-ui/core/Grid';
// %Components
import ToDate from './ToDate';
import IsWorking from './IsWorking';

const ToField = ({
	to,
	current,
	onChange,
	toDateDisabled,
	toggleDisabled,
	formData,
	setFormData,
}) => {
	return (
		<Grid container style={{ justifyContent: 'space-between' }}>
			<IsWorking
				current={current}
				toDateDisabled={toDateDisabled}
				toggleDisabled={toggleDisabled}
				formData={formData}
				setFormData={setFormData}
			/>
			<ToDate to={to} toDateDisabled={toDateDisabled} onChange={onChange} />
		</Grid>
	);
};

export default ToField;

// %Imports
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../../../../redux/actions/profile';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle } from '../../../../themes/Styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// %Components
import { School, Degree, FieldOfStudy } from './Education/_index';
import { FromDate, Description, ToField } from './Experience/_index';

const EducationForm = ({ addEducation, history }) => {
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: '',
	});

	const [toDateDisabled, toggleDisabled] = useState(false);

	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);

		addEducation(formData, history);
	};

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={formStyle().formFieldBodyEdit}
		>
			<Paper className={formStyle().formContainerAlt} elevation={5}>
				<h1>Add Education</h1>
				<h2>Add any Schools you've attended!</h2>
				<form onSubmit={onSubmit} className={formStyle().editForm}>
					<School school={school} onChange={onChange} />
					<Degree degree={degree} onChange={onChange} />
					<FieldOfStudy fieldofstudy={fieldofstudy} onChange={onChange} />
					<FromDate from={from} onChange={onChange} />
					<ToField
						formData={formData}
						setFormData={setFormData}
						to={to}
						current={current}
						onChange={onChange}
						toDateDisabled={toDateDisabled}
						toggleDisabled={toggleDisabled}
					/>
					<Description description={description} onChange={onChange} />
					<ButtonGroup style={{ marginBottom: '3em', alignItems: 'stretch' }}>
						{/* Submit Button */}
						<Button type="submit" className={formStyle().buttonAlt}>
							Submit
						</Button>

						{/* Head back to the Dashboard */}
						<Button
							component={RouterLink}
							className={formStyle().buttonAlt}
							to="/Profile/Dashboard"
						>
							Return
						</Button>
					</ButtonGroup>
				</form>
			</Paper>
		</Grid>
	);
};

EducationForm.propTypes = {
	addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(EducationForm);

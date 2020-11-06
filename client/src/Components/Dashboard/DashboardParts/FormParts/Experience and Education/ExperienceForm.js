// %Imports
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../../../redux/actions/profile';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle } from '../../../../themes/Styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// %Components
import {
	Company,
	FromDate,
	Description,
	JobTitle,
	Location,
	ToField,
} from './Experience/_index';

const ExperienceForm = ({ addExperience, history }) => {
	const [formData, setFormData] = useState({
		company: '',
		title: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: '',
	});

	const [toDateDisabled, toggleDisabled] = useState(false);

	const { company, title, location, from, to, current, description } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);

		addExperience(formData, history);
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
				<h1>Add Experience</h1>
				<h2>Add your previous work Experience!</h2>
				<form onSubmit={onSubmit} className={formStyle().editForm}>
					<JobTitle title={title} onChange={onChange} />
					<Company company={company} onChange={onChange} />
					<Location location={location} onChange={onChange} />
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

ExperienceForm.propTypes = {
	addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(ExperienceForm);

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
	JobDescription,
	JobTitle,
	Location,
	ToField,
} from './Experience/_index';

const ExperienceForm = (props) => {
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
		console.log(formData);
	};

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Paper className={formStyle().formContainerAlt} elevation={5}>
				<form onSubmit={onSubmit}>
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
					<JobDescription description={description} onChange={onChange} />
					<ButtonGroup style={{ justifyContent: 'center' }}>
						{/* Submit Button */}
						<Button type="submit" className={formStyle().button}>
							Submit
						</Button>

						{/* Head back to the Dashboard */}
						<Button
							component={RouterLink}
							className={formStyle().button}
							to="/Profile/Dashboard"
						>
							Return to Dashboard
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

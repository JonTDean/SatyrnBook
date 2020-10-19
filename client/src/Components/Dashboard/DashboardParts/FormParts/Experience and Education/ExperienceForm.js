// %Imports
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../../../redux/actions/profile';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle } from '../../../../themes/Styles';
// %Components
import {
	Company,
	FromDate,
	JobDescription,
	JobTitle,
	Location,
	ToDate,
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
	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Paper className={formStyle().formContainerAlt} elevation={5}>
				<JobTitle title={title} onChange={onChange} />
				<Company company={company} onChange={onChange} />
				<Location location={location} onChange={onChange} />
				<FromDate from={from} onChange={onChange} />
				<ToDate
					to={to}
					current={current}
					onChange={onChange}
					toDateDisabled={toDateDisabled}
					toggleDisabled={toggleDisabled}
				/>
				<JobDescription description={description} onChange={onChange} />
			</Paper>
		</Grid>
	);
};

ExperienceForm.propTypes = {
	addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(ExperienceForm);

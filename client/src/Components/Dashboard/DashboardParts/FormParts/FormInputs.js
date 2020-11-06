// %Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// %Styling
import { formStyle } from '../../../themes/Styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
// %Components
import {
	Profession,
	Company,
	Website,
	Location,
	Skills,
	GithubUsername,
	Bio,
} from './Inputs/_index';
import {
	LinkedIn,
	Twitter,
	Youtube,
	Instagram,
	Facebook,
} from './Media/_index';

const FormInputs = ({
	toggleSocialInputs,
	displaySocialInputs,
	formData,
	onChange,
	onSubmit,
	DynamicAlert,
}) => {
	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram,
	} = formData;

	return (
		<form className={formStyle().editForm} onSubmit={onSubmit}>
			{/* Teach or Learn Selection */}
			<Profession status={status} onChange={onChange} />

			{/* List User Company */}
			<Company company={company} onChange={onChange} />

			{/* Get User website */}
			<Website website={website} onChange={onChange} />

			{/* Get User location */}
			<Location location={location} onChange={onChange} />

			{/* Get User skills */}
			<Skills skills={skills} onChange={onChange} />

			{/* Get User Github Username */}
			<GithubUsername githubusername={githubusername} onChange={onChange} />

			{/* User adds a description of themselves */}
			<Bio bio={bio} onChange={onChange} />

			<ButtonGroup
				justify="space-around"
				style={{ marginBottom: '3em', alignItems: 'stretch' }}
			>
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

				{/* Open Social Media Button */}
				<Button
					className={formStyle().buttonAlt}
					onClick={() => toggleSocialInputs(!displaySocialInputs)}
				>
					{displaySocialInputs ? 'Close' : 'Open'} Social Media
				</Button>
			</ButtonGroup>

			{/* Alert for any errors */}
			<DynamicAlert />

			{displaySocialInputs ? (
				<Grid
					container
					direction="column"
					justify="space-around"
					alignItems="stretch"
					style={{ marginBottom: '3em' }}
				>
					<LinkedIn self={linkedin} onChange={onChange} />
					<Twitter self={twitter} onChange={onChange} />
					<Youtube self={youtube} onChange={onChange} />
					<Instagram self={instagram} onChange={onChange} />
					<Facebook self={facebook} onChange={onChange} />
				</Grid>
			) : (
				<> </>
			)}
		</form>
	);
};

export default FormInputs;

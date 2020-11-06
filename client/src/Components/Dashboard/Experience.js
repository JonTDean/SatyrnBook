// %React
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
// %Styling
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import StyleTableRow from '../themes/Tables/StyleTableRow';
import StyleTableCell from '../themes/Tables/StyleTableCell';
import { bodyStyle } from '../themes/Styles';

const Experience = ({ experience }) => {
	const experiences = experience.map((exp) => (
		<StyleTableRow key={exp._id}>
			<StyleTableCell>{exp.company}</StyleTableCell>
			<StyleTableCell>{exp.title}</StyleTableCell>
			<StyleTableCell>
				<Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
				{exp.to === null ? (
					'Now'
				) : (
					<Moment format="YYYY/MM/DD">{exp.to}</Moment>
				)}
			</StyleTableCell>
			<StyleTableCell>
				<Button className={bodyStyle().button_Primary}>Delete</Button>
			</StyleTableCell>
		</StyleTableRow>
	));

	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<StyleTableRow>
							<StyleTableCell>Company</StyleTableCell>
							<StyleTableCell>Title</StyleTableCell>
							<StyleTableCell>Years</StyleTableCell>
							<StyleTableCell />
						</StyleTableRow>
					</TableHead>
					<TableBody>{experiences}</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

Experience.propTypes = {
	experience: PropTypes.array.isRequired,
};

export default Experience;

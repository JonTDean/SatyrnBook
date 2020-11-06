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

const Education = ({ education }) => {
	const educations = education.map((edu) => (
		<StyleTableRow key={edu._id}>
			<StyleTableCell>{edu.school}</StyleTableCell>
			<StyleTableCell>{edu.degree}</StyleTableCell>
			<StyleTableCell>
				<Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
				{edu.to === null ? (
					'Now'
				) : (
					<Moment format="YYYY/MM/DD">{edu.to}</Moment>
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
							<StyleTableCell>School</StyleTableCell>
							<StyleTableCell>Degree</StyleTableCell>
							<StyleTableCell>Years</StyleTableCell>
							<StyleTableCell />
						</StyleTableRow>
					</TableHead>
					<TableBody>{educations}</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

Education.propTypes = {
	education: PropTypes.array.isRequired,
};

export default Education;

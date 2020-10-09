// %Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// %Styling
import Alert from '@material-ui/lab/Alert';

// Dynamically Create an alert based on the passed in props
const DynamicAlert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<Alert key={alert.id} severity={alert.alertType}>
			{alert.msg}
		</Alert>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});
export default connect(mapStateToProps)(DynamicAlert);

import React from 'react';
import PropTypes from 'prop-types';

const Badge = props => {
	return(
		props.badges.map(badge => {
			return <span key={badge} className="badge badge-success">{badge}</span>;
		})
	);
};

Badge.proptypes = {
	badges: PropTypes.array
};

Badge.defaultProps = {
	badges: []
};

export default Badge;
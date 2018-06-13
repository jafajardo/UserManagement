import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Badge from './Shared/Badge';

import * as actions from '../actions';

class Dashboard extends Component {
	componentDidMount() {
		this.props.GetUsers();
	}

	renderUsers() {
		const { Users } = this.props;
		return(
			Users.map(user => {
				return <Link key={user.id} className="list-group-item" to={`/User/${user.username}`}>
					{user.username}
					<Badge badges={user.groups}/>
				</Link>;
			})
		);
	}

	render() {
		return(
			<div className="list-group">
				{this.renderUsers()}
			</div>
		);
	}
}

Dashboard.proptypes = {
	Users: PropTypes.array
};

Dashboard.defaultProps = {
	Users: []
};

function MapStateToProps(state) {
	return {
		Users: state.UsersReducer.Users
	};
}

export default connect(MapStateToProps, actions)(Dashboard);
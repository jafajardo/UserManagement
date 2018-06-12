import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';

class User extends Component {
	constructor(props) {
		super(props);
    
		this.state = {
			firstname: '',
			surname: '',
			mobile: '',
    };
    
	}

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps != this.props || nextState != this.state) {
      return true;
    }
    return false;
  }

	componentDidMount() {
		const { match: { params }, GetUserDetails } = this.props;
		GetUserDetails(params.Id);
  }
  
	handleSubmit = (event) => {
		event.preventDefault();
    console.dir(this.state)
	}
  
	handleFirstnameInputChange = (event) => {
		this.setState({
			firstname: event.target.value
		});
  }

  handleSurnameInputChange = (event) => {
    this.setState({
      surname: event.target.value
    });
  }

  handleMobileInputChange = (event) => {
    this.setState({
      mobile: event.target.value
    });
  }

	render () {
    const { UserDetails } = this.props;

		if(!UserDetails) {
			<div>Loading...</div>;  
    }
    
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstnameInput">First name</label>
          <input 
            key={UserDetails.Firstname}
						className="form-control" 
						id="firstnameInput" 
						placeholder="First name" 
            defaultValue= {UserDetails.Firstname}
            onChange={this.handleFirstnameInputChange} />
				</div>

				<div className="form-group">
					<label htmlFor="surnameInput">First name</label>
          <input 
            key={UserDetails.Surname}
						className="form-control" 
						id="surnameInput" 
						placeholder="Surname" 
            defaultValue={UserDetails.Surname}
            onChange={this.handleSurnameInputChange} />
				</div>

				<div className="form-group">
					<label htmlFor="mobileInput">First name</label>
          <input 
            key={UserDetails.Mobile}
						className="form-control" 
						id="mobileInput" 
						placeholder="Mobile number" 
						defaultValue={UserDetails.Mobile} 
            onChange={this.handleMobileInputChange} />
				</div>

				<button type="submit" className="btn btn-success">Save</button>
			</form>
		);
	}
}

User.proptypes = {
	UserDetails: PropTypes.object
};
User.defaultProps = {
	UserDetails: {}
};

function MapStateToProps(state) {
	return {
		UserDetails: state.UsersReducer.UserDetails
	};
}

export default reduxForm({ form: 'UserForm'})(connect(MapStateToProps, actions)(User));
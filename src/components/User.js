import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

class User extends Component {
	constructor(props) {
		super(props);
    
		this.state = {
      username: '',
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
		GetUserDetails(params.Username);
  }

  componentDidUpdate(prevProps) {
    if (this.state.username === '' && this.props.match.params.Username !== undefined) {
      this.setState({
        username: this.props.match.params.Username
      })
    }
    if (this.props.UserDetails.firstname !== prevProps.UserDetails.firstname) {
      this.setState({
        firstname: this.props.UserDetails.firstname
      })
    }
    if (this.props.UserDetails.surname !== prevProps.UserDetails.surname) {
      this.setState({
        surname: this.props.UserDetails.surname
      })
    }
    if (this.props.UserDetails.mobile !== prevProps.UserDetails.mobile) {
      this.setState({
        mobile: this.props.UserDetails.mobile
      })
    }
  }
  
	handleSubmit = (event) => {
		event.preventDefault();

    const { UpdateUserDetails } = this.props;
    const userDetails = {
      "Username": this.state.username,
      "Firstname": this.state.firstname,
      "Surname": this.state.surname,
      "Mobile": this.state.mobile
    }

    UpdateUserDetails(userDetails);
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
            key={UserDetails.firstname}
						className="form-control" 
						id="firstnameInput" 
						placeholder="First name" 
            value={this.state.firstname}
            onChange={this.handleFirstnameInputChange} />
				</div>

				<div className="form-group">
					<label htmlFor="surnameInput">First name</label>
          <input 
            key={UserDetails.surname}
						className="form-control" 
						id="surnameInput" 
						placeholder="Surname" 
            value={this.state.surname}
            onChange={this.handleSurnameInputChange} />
				</div>

				<div className="form-group">
					<label htmlFor="mobileInput">First name</label>
          <input 
            key={UserDetails.mobile}
						className="form-control" 
						id="mobileInput" 
						placeholder="Mobile number" 
						value={this.state.mobile} 
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

export default connect(MapStateToProps, actions)(User);
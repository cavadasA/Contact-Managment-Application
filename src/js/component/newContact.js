import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const NewContact = props => {
	const { actions } = useContext(Context);
	const location = useLocation();
	let history = useHistory();
	const [details, setDetails] = useState();
	const name = actions.getValue("name");
	const email = actions.getValue("email");
	const phone = actions.getValue("phone");
	const address = actions.getValue("address");

	useEffect(() => {
		if (Object.keys(props).length !== 0) {
			setDetails(props.location.state.information);
			actions.setName(props.location.state.information.full_name);
			actions.setEmail(props.location.state.information.email);
			actions.setPhone(props.location.state.information.phone);
			actions.setAddress(props.location.state.information.address);
			actions.setId(props.location.state.information.id);
		}
	}, []);

	return (
		<div className="row">
			<div className="col-6 offset-md-3">
				<form>
					<div className="form-group">
						<label htmlFor="inputName">Full Name</label>
						<input
							type="text"
							className="form-control"
							id="inputName"
							value={name}
							aria-describedby="emailHelp"
							placeholder="Enter your name"
							onChange={event => actions.setName(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="inputEmail1">Email</label>
						<input
							type="email"
							className="form-control"
							id="inputEmail"
							value={email}
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={event => actions.setEmail(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							type="number"
							className="form-control"
							id="phone"
							value={phone}
							placeholder="Enter your phone number"
							onChange={event => actions.setPhone(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Address</label>
						<input
							type="text"
							className="form-control"
							id="address"
							value={address}
							placeholder="Enter your address"
							onChange={event => actions.setAddress(event.target.value)}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary btn-lg btn-block"
						onClick={() => {
							{
								Object.keys(props).length !== 0 ? actions.updateContact() : actions.postContact();
							}
							history.push("/");
						}}>
						Save
					</button>
					<Link to="/">or go back to contacts</Link>
				</form>
			</div>
		</div>
	);
};

NewContact.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
		state: PropTypes.object
	})
};

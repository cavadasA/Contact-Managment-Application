import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewContact = () => {
	const { actions } = useContext(Context);
	let history = useHistory();

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
							placeholder="Enter your address"
							onChange={event => actions.setAddress(event.target.value)}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary btn-lg btn-block"
						onClick={() => {
							actions.postContact();
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

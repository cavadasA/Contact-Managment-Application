import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const SingleContact = props => {
	const details = props;
	const { actions } = useContext(Context);

	return (
		<div className="row border py-4">
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">Hola</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="col-2 my-3">
				<img src="https://randomuser.me/api/portraits/men/91.jpg" />
			</div>
			<div className="col-8">
				<h5>{details.information.full_name}</h5>

				<p>
					<FaMapMarkerAlt className="pr-2" size={32} />
					{details.information.address}
				</p>
				<p>
					<FaPhone className="pr-2" size={32} />
					{details.information.phone}
				</p>
				<p>
					<FaEnvelope className="pr-2" size={32} />
					{details.information.email}
				</p>
			</div>
			<div className="col-2">
				<FaPencilAlt size={32} />
				<FaTrash size={32} className="ml-3" onClick={() => actions.deleteContact(details.information.id)} />
			</div>
		</div>
	);
};

SingleContact.propTypes = {
	information: PropTypes.object
};

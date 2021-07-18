import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
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
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [localContacts, setLocalContacts] = useState(actions.getContacts());

	function handleDelete() {
		let result = [];
		for (let i = 0; i < localContacts.length; i++) {
			if (localContacts[i].id === details.information.id) {
				result = localContacts.filter(contact => contact !== localContacts[i]);
			}
		}
		actions.setContacts(result);
		actions.deleteContact(details.information.id);
		setShow(false);
	}

	return (
		<div className="row border py-4">
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => handleDelete()}>
						Delete Contact
					</Button>
				</Modal.Footer>
			</Modal>
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
				<Link
					to={{
						pathname: "/updateContact",
						state: details
					}}>
					<FaPencilAlt size={32} />
				</Link>
				<FaTrash size={32} className="ml-3" onClick={handleShow} />
			</div>
		</div>
	);
};

SingleContact.propTypes = {
	information: PropTypes.object
};

import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleContact } from "../component/singleContact";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions } = useContext(Context);
	const [contacts, setContacts] = useState(actions.getContacts());
	useEffect(
		() => {
			fetch("https://assets.breatheco.de/apis/fake/contact/agenda/AntonioCavadas")
				.then(response => response.json())
				.then(data => actions.setContacts(data))
				.then(() => setContacts(actions.getContacts()));
		},
		[contacts]
	);

	return (
		<div className="mt-5">
			<div className="row my-2">
				<div className="col-3 offset-md-8">
					<Link to="/newContact" style={{ textDecoration: "none" }} className="text-white">
						<button type="button" className="btn btn-success">
							Add a new Contact
						</button>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-6 offset-md-3">
					{contacts.length === 0
						? ""
						: contacts.map(contact => {
								return <SingleContact key={contact.id} information={contact} />;
						  })}
				</div>
			</div>
		</div>
	);
};

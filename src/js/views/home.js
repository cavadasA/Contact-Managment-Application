import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import { SingleContact } from "../component/singleContact";
import { Link } from "react-router-dom";

export const Home = () => {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/AntonioCavadas")
			.then(response => response.json())
			.then(data => setContacts(data));
	}, []);

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

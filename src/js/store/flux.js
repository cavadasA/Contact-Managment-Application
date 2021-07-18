const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			name: "",
			email: "",
			phone: "",
			address: "",
			id: "",
			agenda_slug: "AntonioCavadas",
			apiURL: "https://assets.breatheco.de/apis/fake/contact/"
		},
		actions: {
			setContacts: array => {
				const store = getStore();
				setStore({ contacts: array });
			},
			getContacts: () => {
				const store = getStore();
				return store.contacts;
			},
			getValue: value => {
				const store = getStore();
				return store[value];
			},
			setName: value => {
				const store = getStore();
				setStore({ name: value });
			},
			setEmail: value => {
				const store = getStore();
				setStore({ email: value });
			},
			setPhone: value => {
				const store = getStore();
				setStore({ phone: value });
			},
			setAddress: value => {
				const store = getStore();
				setStore({ address: value });
			},
			setId: value => {
				const store = getStore();
				setStore({ id: value });
			},
			postContact: () => {
				const store = getStore();
				let data = {
					full_name: store.name,
					email: store.email,
					agenda_slug: store.agenda_slug,
					address: store.address,
					phone: store.phone
				};
				fetch(store.apiURL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				});
				setStore({
					name: "",
					phone: "",
					email: "",
					address: ""
				});
			},
			updateContact: () => {
				const store = getStore();
				let data = {
					full_name: store.name,
					email: store.email,
					agenda_slug: store.agenda_slug,
					address: store.address,
					phone: store.phone
				};
				fetch(store.apiURL + store.id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				});
				setStore({
					name: "",
					phone: "",
					email: "",
					address: "",
					id: ""
				});
			},
			deleteContact: value => {
				const store = getStore();
				fetch(store.apiURL + value, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
		}
	};
};

export default getState;

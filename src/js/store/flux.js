const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			name: "",
			email: "",
			phone: "",
			address: "",
			agenda_slug: "AntonioCavadas",
			apiURL: "https://assets.breatheco.de/apis/fake/contact/"
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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

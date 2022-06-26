import React, { useState, useEffect } from "react";

const PlanDetailsContext = React.createContext({ planDetails: {}, onSelectOption: () => {} });

export default PlanDetailsContext;

export const PlanDetailsContextProvider = (props) => {
	const [planDetails, setPlanDetails] = useState({
		coffeeForm: "",
		coffeeType: "",
		coffeeAmount: "",
		coffeeGrind: "",
		deliverySchedule: "",
	});

	//set coffeeGrind to empty string if "Capsule" option is selected
	useEffect(() => {
		if (planDetails.coffeeForm === "Capsule") {
			setPlanDetails((prevPlanDetails) => {
				return {
					...prevPlanDetails,
					coffeeGrind: "",
				};
			});
		}
	}, [planDetails.coffeeForm]);

	const selectOptionHandler = (event) => {
		const { name, value } = event.target;
		setPlanDetails((prevPlanDetails) => {
			return {
				...prevPlanDetails,
				[name]: value,
			};
		});
	};

	return (
		<PlanDetailsContext.Provider value={{ planDetails: planDetails, onSelectOption: selectOptionHandler }}>
			{props.children}
		</PlanDetailsContext.Provider>
	);
};

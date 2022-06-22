import React, { useState } from "react";

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

	const selectOptionHandler = (event) => {
		const { name, value } = event.target;
		setPlanDetails((prevPlanDetails) => {
			return {
				...prevPlanDetails,
				[name]: value,
			};
		});
	};

	// console.log("CONTEXT RENDERED!!!!!");

	return (
		<PlanDetailsContext.Provider value={{ planDetails: planDetails, onSelectOption: selectOptionHandler }}>
			{props.children}
		</PlanDetailsContext.Provider>
	);
};

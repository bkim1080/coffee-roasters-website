import React, { useState } from "react";

const PlanContext = React.createContext({ planDetails: {}, onSelectOption: () => {} });

export default PlanContext;

export const PlanContextProvider = (props) => {
	const [planDetails, setPlanDetails] = useState({
		// coffeeForm: "Capsule",
		coffeeForm: "",
		coffeeType: "",
		coffeeAmount: "",
		coffeeGrind: "",
		deliverySchedule: "",
	});

	const selectOptionHandler = (selectedOption) => {
		setPlanDetails((prevPlanDetails) => {
			return { ...prevPlanDetails, ...selectedOption };
		});
	};

	return (
		<PlanContext.Provider value={{ planDetails: planDetails, onSelectOption: selectOptionHandler }}>
			{props.children}
		</PlanContext.Provider>
	);
};

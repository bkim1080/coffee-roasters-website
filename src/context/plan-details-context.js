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

	const selectOptionHandler = (selectedOption) => {
		setPlanDetails((prevPlanDetails) => {
			return { ...prevPlanDetails, ...selectedOption };
		});
	};

	return (
		<PlanDetailsContext.Provider value={{ planDetails: planDetails, onSelectOption: selectOptionHandler }}>
			{props.children}
		</PlanDetailsContext.Provider>
	);
};

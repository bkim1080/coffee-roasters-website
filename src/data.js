export const pageLinks = [
	{ id: 1, url: "/", text: "Home" },
	{ id: 2, url: "/aboutus", text: "About Us" },
	{ id: 3, url: "/subscribe", text: "Create Your Plan" },
];

export const coffeeList = [
	{
		id: 1,
		image: "image-gran-espresso.png",
		name: "Gran Expresso",
		description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
	},
	{
		id: 2,
		image: "image-planalto.png",
		name: "Planalto",
		description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
	},
	{
		id: 3,
		image: "image-piccollo.png",
		name: "Piccollo",
		description: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
	},
	{
		id: 4,
		image: "image-danche.png",
		name: "Danche",
		description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
	},
];

export const featuresList = [
	{
		id: 1,
		image: "icon-coffee-bean.svg",
		name: "Best quality",
		description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
		alt: "coffee bean icon",
	},
	{
		id: 2,
		image: "icon-gift.svg",
		name: "Exclusive benefits",
		description: "Special offers and swag when you subscribe, including 30% off your first shipment.",
		alt: "gift icon",
	},
	{
		id: 3,
		image: "icon-truck.svg",
		name: "Free shipping",
		description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
		alt: "truck icon",
	},
];

export const stepsList = [
	{
		id: 1,
		num: "01",
		name: "Pick your coffee",
		description:
			"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
	},
	{
		id: 2,
		num: "02",
		name: "Choose the frequency",
		description:
			"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
	},
	{
		id: 3,
		num: "03",
		name: "Receive and enjoy!",
		description:
			"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
	},
];

export const headquartersList = [
	{
		id: 1,
		image: "illustration-uk.svg",
		country: "United Kingdom",
		street: "68  Asfordby Rd",
		town1: "Alcaston",
		town2: "SY6 1YA",
		phone: "+44 1241 918425",
		alt: "UK country shape",
	},
	{
		id: 2,
		image: "illustration-canada.svg",
		country: "Canada",
		street: "1528  Eglinton Avenue",
		town1: "Toronto",
		town2: "Ontario M4P 1A6",
		phone: "+1 416 485 2997",
		alt: "Canada country shape",
	},
	{
		id: 3,
		image: "illustration-australia.svg",
		country: "Australia",
		street: "36 Swanston Street",
		town1: "Kewell",
		town2: "Victoria",
		phone: "+61 4 9928 3629",
		alt: "Austrailia country shape",
	},
];

export const planQuestionsList = [
	{
		id: 1,
		question: "How do you drink your coffee?",
		type: "coffeeForm",
		disable: false,
		options: [
			{
				id: 1,
				name: "Capsule",
				description: "Compatible with Nespresso systems and similar brewers.",
				type: "coffeeForm",
			},
			{
				id: 2,
				name: "Filter",
				description: "For pour over or drip methods like Aeropress, Chemex, and V60.",
				type: "coffeeForm",
			},
			{
				id: 3,
				name: "Expresso",
				description: "Dense and finely ground beans for an intense, flavorful experience.",
				type: "coffeeForm",
			},
		],
	},
	{
		id: 2,
		question: "What type of coffee?",
		type: "coffeeType",
		disable: false,
		options: [
			{
				id: 1,
				name: "Single Origin",
				description: "Distinct, high quality coffee from a specific family-owned farm.",
				type: "coffeeType",
			},
			{
				id: 2,
				name: "Decaf",
				description: "Just like regular coffee, except the caffeine has been removed.",
				type: "coffeeType",
			},
			{
				id: 3,
				name: "Blended",
				description: "Combination of two or three dark roasted beans of organic coffees.",
				type: "coffeeType",
			},
		],
	},
	{
		id: 3,
		question: "How much would you like?",
		type: "coffeeAmount",
		disable: false,
		options: [
			{
				id: 1,
				name: "250g",
				description: "Perfect for the solo drinker. Yields about 12 delicious cups.",
				type: "coffeeAmount",
			},
			{
				id: 2,
				name: "500g",
				description: "Perfect option for a couple. Yields about 40 delectable cups.",
				type: "coffeeAmount",
			},
			{
				id: 3,
				name: "1000g",
				description: "Perfect for offices and events. Yields about 90 delightful cups.",
				type: "coffeeAmount",
			},
		],
	},
	{
		id: 4,
		question: "Want us to grind them?",
		type: "coffeeGrind",
		disable: true,
		options: [
			{
				id: 1,
				name: "Wholebean",
				description: "Best choice if you cherish the full sensory experience.",
				type: "coffeeGrind",
			},
			{
				id: 2,
				name: "Filter",
				description: "For drip or pour-over coffee methods such as V60 or Aeropress.",
				type: "coffeeGrind",
			},
			{
				id: 3,
				name: "Cafetiére",
				description: "Course ground beans specially suited for french press coffee.",
				type: "coffeeGrind",
			},
		],
	},
	{
		id: 5,
		question: "How often should we deliver?",
		type: "deliverySchedule",
		disable: false,
		options: [
			{
				id: 1,
				name: "Every Week",
				description: "per shipment. Includes free first-class shipping.",
				type: "deliverySchedule",
			},
			{
				id: 2,
				name: "Every 2 Weeks",
				description: "per shipment. Includes free priority shipping.",
				type: "deliverySchedule",
			},
			{
				id: 3,
				name: "Every Month",
				description: "per shipment. Includes free priority shipping.",
				type: "deliverySchedule",
			},
		],
	},
];

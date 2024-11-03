// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'June',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '25fa57bbeb07a73ecb73512f3b340e75', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'My Website',
			icon: 'crown',
			link: 'https://ndscartridges.neocities.org/',
		},
		{
			id: '4',
			name: 'Bluesky',
			icon: 'rabbit',
			link: 'https://bsky.app/',
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'That one playlist',
					link: 'https://www.youtube.com/watch?v=zbC1nmp82I4&list=PLUXTKm9dp3EE82HNNnZfUdbV3a59THflr&pp=gAQBiAQB',
				},
				{
					name: 'That one playlist',
					link: 'https://www.youtube.com/watch?v=zbC1nmp82I4&list=PLUXTKm9dp3EE82HNNnZfUdbV3a59THflr&pp=gAQBiAQB',
				},
				{
					name: 'That one playlist',
					link: 'https://www.youtube.com/watch?v=zbC1nmp82I4&list=PLUXTKm9dp3EE82HNNnZfUdbV3a59THflr&pp=gAQBiAQB',
				},
				{
					name: 'That one playlist',
					link: 'https://www.youtube.com/watch?v=zbC1nmp82I4&list=PLUXTKm9dp3EE82HNNnZfUdbV3a59THflr&pp=gAQBiAQB',
				},
				{
			icon: 'rabbit',
			id: '2',
			links: [
				{
					name: 'SFM Lab',
					link: 'https://sfmlab.com/',
				},
				{
					name: 'Open 3D Labs',
					link: 'https://open3dlab.com/',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Normalsville',
					link: 'https://normalsville.the-comic.org/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'rat',
			id: '1',
			links: [
				{
					name: 'Twitter',
					link: 'https://twitter.com/',
				},
				{
					name: 'Bluesky',
					link: 'https://bsky.app/',
				},
				{
					name: 'My Website',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};

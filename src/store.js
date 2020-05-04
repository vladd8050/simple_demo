import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

const initialState = {
	count: 14,
	projectsFilter: '',
	usersFilter: '',
	userIdCounter: 7,
	projects: [],
	users: [],	
	projects_old: [
		{
			status: 150,
			brandId: 9112,
			pricingId: 0,
			category: 0,
			createDate: '/Date(1574346067972)/',
			datePublished: null,
			projectDate: '2019-11-21',
			name: 'Rolling Publish 1615',
			numOfPhotos: 9,
			projectId: 13522068,
			coverPhoto: 'homepage.jpg?rs=132188251511274847',
			coverFocalPoint: null,
			title: 'Rolling Publish 1615',
			type: 0,
			usageCounter: 0,
			storageSize: 20992310,
			storagePolicy: 100,
			allowStore: true,
			localeIndex: 2,
			dateTaken: '2019-11-20T22:00:00.000Z',
			projectIndex: 5,
			show: true,
			users: [
				{
					id: 1,
					name: 'User 1',
					email: 'user1@org.com',
				},
				{
					id: 2,
					name: 'User 2',
					email: 'user2@org.com',
				},
				{
					id: 3,
					name: 'User 3',
					email: 'user3@org.com',
				},
			],
		},
		{
			status: 15,
			brandId: 9112,
			pricingId: 16,
			category: 0,
			createDate: '/Date(1575302702384)/',
			datePublished: null,
			projectDate: '2019-11-23',
			name: 'Rolling Publish 1414',
			numOfPhotos: 12,
			projectId: 13183980,
			coverPhoto: 'homepage.jpg?rs=132168147291164703',
			coverFocalPoint: null,
			title: 'Rolling Publish 1414',
			type: 0,
			usageCounter: 0,
			storageSize: 26759793,
			storagePolicy: 100,
			allowStore: true,
			localeIndex: 2,
			dateTaken: '2019-11-23T22:00:00.000Z',
			projectIndex: 6,
			show: true,
			users: [
				{
					id: 4,
					name: 'User 4',
					email: 'user4@org.com',
				},
				{
					id: 5,
					name: 'User 5',
					email: 'user5@org.com',
				},
				{
					id: 6,
					name: 'User 6',
					email: 'user6@org.com',
				},
			],
		},
	],
};

const middlewares = connect ? applyMiddleware(connect(initialState)) : [];
const store = createStore(initialState, middlewares);

export default store;

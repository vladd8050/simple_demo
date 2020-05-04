import { h, Fragment } from 'preact';
import { useState, useMemo, useCallback, useEffect } from 'preact/hooks';
import { connect } from 'redux-zero/preact';
import { Link, useLocation } from 'wouter-preact';
import {useMedia} from 'react-use';

import { Table } from '../../components/organisms/Table';

import { initUsersList } from '../../actions';

const mapToProps = ({ count, projects, users }) => {
	return {
		count,
		projects,
		users,
	};
};

const actions = store => ({
	clearUsersList: state => ({ users: [] }),
	init: initUsersList,
});

export const Users = connect(
	mapToProps,
	actions
)(({ params, projects, users, init, clearUsersList, prevLocation }) => {
	const [location, setLocation] = useLocation();

	useEffect(() => {
		clearUsersList();
		init(parseInt(params.projectid));
	}, [params.projectid]);

	const currentProject = projects.find(project => project.projectId === parseInt(params.projectid)) || {};

	const handleAddUser = () => {};
	const [filter, setFilter] = useState('');
	const handleFilter = useCallback(e => {
		const { value } = e.target;
		setFilter(value);
	}, []);
	const filteredUsers = useMemo(() => {
		if (!filter) return users;
		return users.filter(user => user.name.includes(filter));
	}, [users, filter]);

	const handleRowClick = useCallback(
		user => {
			setLocation(`project|${params.projectid}|user|${user.userId}`);
		},
		[params.projectid]
	);

	const isMobile = useMedia('(max-width: 479px)');

	return (
		<div className="ScrollArea">
			<Link href={prevLocation}>
				<a class="back F1 S3 CH8 C6 W2 L1 U1">&lt; Back</a>
			</Link>
			<div className="header">
				<div className="header__title">
					<div className="title F1 S4 C8 W2 L4 U2">
						<a href="#project">
							<span className="CH6 js-campaigns">Projects</span>
						</a>{' '}
						&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
						<span className="W3 F1 header__title--name"> {currentProject.title}</span>
					</div>
				</div>
			</div>
			<div className="header__top">
				<div className="search search--component iconBefore active" id="topp_t2019113121">
					<input size={10} placeholder="Search Users" onInput={handleFilter} />
				</div>
				
				<Link href={`project|${currentProject.projectId}|add_user`}>
					{ isMobile ? (
						<div
							className="downloasdCSV icon"
							style={{
								backgroundPosition: '-50px -31px',
								width: 20,
								height: 20,
								margin: '0 20px',
								cursor: 'pointer',
							}}
						/>
					) : (
						<div 
							className="pButton pLarge F2 S2 BC3 BCH4 C8 W2 L2 U2"
							onClick={handleAddUser}
							style={{marginLeft: 20}}
						>
							Add user
						</div>
					)}
				</Link>
			</div>
			<div className="header__search search--component--results F1 S2 C8 W2 L1 U1" style={{ display: 'none' }}>
				<div className="text" />
				<div className="exitSearch icon" />
			</div>
			<Table
				columns={[
					{
						title: 'User Name',
						dataIndex: 'name',
						render: user => (
							<div className="-name">
								<span>{user.name}</span>
								<em className="icon " onClick={() => handleRowClick(user)} />
							</div>
						),
					},
					{
						title: 'e-mail',
						dataIndex: 'email',
					},
					{
						title: 'Active',
						dataIndex: 'status',
					},
				]}
				data={filteredUsers}
				onRowClick={user => handleRowClick(user)}

			/>
			<div className="pFooterPanel F1 S0 C6 W2 L1 U1">
				©2019, <a href="https://www.pic-time.com">Pic-Time</a>, All Rights Reserved. |{' '}
				<a href="https://www.pic-time.com#termsofservice" target="_blank">
					Terms Of Service
				</a>{' '}
				|{' '}
				<a href="https://www.pic-time.com#privacy" target="_blank">
					Privacy Policy
				</a>
			</div>
		</div>
	);
});

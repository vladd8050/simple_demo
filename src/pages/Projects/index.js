import { h, Component } from 'preact';
import { useState, useMemo, useCallback, useEffect, useRef } from 'preact/hooks';
import { connect } from 'redux-zero/preact';
import { useScroll } from 'react-use';

import { initProjects } from '../../actions';

const ProjectListView = ({ projects, renderItem: Item, isLoading }) => {
	useEffect(() => {
		let scrollElement = document.querySelector('.ScrollArea');
	}, []);
	return (
		<div className="projectsBoxContainer">{projects && projects.map(project => <Item project={project} />)}</div>
	);
};

const Project = ({ project }) => (
	<div className="prjBox " projectid={project.projectId} projectindex={project.projectIndex}>
		<a href={`#project|${project.projectId}`}>
			<div
				className="prjCoverThumb BC3"
				style={{
					backgroundImage: !!project.coverPhoto
						? `url("${_pt$.getProjectUrls(project.projectId).projectUrl +
								'/homepage/' +
								'smallres/' +
								project.coverPhoto}")`
						: 'none',
				}}
			></div>
			<div className="name F2 S3 C8 W2 L3 U2">{project.title}</div>
			<div className="createDate F1 S1 C6 W2 L1 U2">
				{dateFormat(pictimeParseDate(project.dateTaken || project.createDate), 'mediumDate')}{' '}
				<span className="C8" />
			</div>
			<div className="mask">
				<div className="controls" style={{ display: 'flex', justifyContent: 'center' }}>
					<div className="edit icon" />
				</div>
			</div>
		</a>
	</div>
);

const mapToProps = ({ count, projects, projectsPageScroll, isLoading }) => ({
	count,
	projects,
	projectsPageScroll,
	isLoading,
});

const actions = store => ({
	saveScroll: (state, value) => ({ projectsPageScroll: value }),
	init: state => initProjects(state, store),
});

export const Projects = connect(
	mapToProps,
	actions
)(({ count, projects, init, saveScroll, projectsPageScroll, isLoading }) => {
	useEffect(() => {
		init();
	}, []);
	const [ableScrollTracking, setAbleScrollTracking] = useState(false);

	const scrollRef = useRef(null);
	const { x, y } = useScroll(scrollRef);
	useEffect(() => {
		setAbleScrollTracking(true);
		if (projectsPageScroll && !isLoading) {
			let scrollElement = document.querySelector('.ScrollArea');
			scrollElement.scrollTop = projectsPageScroll;
		}
	}, [projects, isLoading]);
	// const {x, y} = useWindowScroll();
	useEffect(() => {
		if (ableScrollTracking && !isLoading) saveScroll(y);
	}, [y, isLoading]);

	const [filter, setFilter] = useState('');
	const handleFilter = useCallback(e => {
		const { value } = e.target;
		setFilter(value);
	}, []);

	const filteredProjects = useMemo(() => {
		if (!filter) return projects;
		return projects.filter(project => project.title.includes(filter));
	}, [projects, filter]);

	return (
		<div className="ScrollArea" ref={scrollRef}>
			<div className="header__top">
				<div className="search search--component iconBefore active" id="topp_t201911952">
					<input size={10} placeholder="Search Projects" onInput={handleFilter} />
				</div>
			</div>
			<div className="searchResults F1 S3 C8 W2 L1 U1">
				<div className="text"></div>
				{/* <div class="exitSearch icon"></div> */}
			</div>
			<ProjectListView projects={filteredProjects} renderItem={Project} isLoading={isLoading} />
			<div className="pFooterPanel F1 S0 C6 W2 L1 U1">
				©2019,
				<a href="https://www.pic-time.com">Pic-Time</a>, All Rights Reserved. |
				<a href="https://www.pic-time.com#termsofservice" target="_blank">
					Terms Of Service
				</a>
				|
				<a href="https://www.pic-time.com#privacy" target="_blank">
					Privacy Policy
				</a>
			</div>
		</div>
	);
});

export const getAccountProjects = () => {
	return new Promise(resolve => {
		_pt$.getAccountProjects(result => resolve(result));
	});
};

export const getProjectsUsers = projectId => {
	return new Promise(resolve => {
		_pt$.getProjectsUsers([projectId], result => resolve(result));
	});
};

export const photographerInvite = data => {
	const {projectId, user} = data;
	return new Promise(resolve => {
		_pt$.photographerInvite(projectId, null, [user], false, result => resolve(result));
	});
}

export const userPhotoMapping = data => {
	const {userId, startSession, endSession} = data;
	return new Promise(resolve => {
		_pt$.userPhotoMapping(userId, startSession, endSession, result => resolve(result));
	});
}
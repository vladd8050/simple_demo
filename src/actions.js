import {getAccountProjects, getProjectsUsers, photographerInvite, userPhotoMapping} from './api';

export const initUsersList = async (state, projectId) => {
    try {
        let _state = {}
        if (state.projects.length === 0) _state.projects = await getAccountProjects();
        _state.users = await getProjectsUsers(projectId);
        return _state;
    } catch (error) {
        console.log('error', error);
    }
}

export const initProjects = async (state, store) => {
    try {
    //   state.isLoading = true;
      store.setState({
        isLoading: true
      })
      let prj = await getAccountProjects();

      return {
          projects: prj,
          isLoading: false
        };
    } catch (error) {
      console.log('error', error)
    }
}

export const saveNewUser = async (state, data) => {
  const {projectId, user} = data;
  try {
    await photographerInvite({
      projectId,
      user
    })
  } catch (error) {
    console.log('error', error);
  }
}

export const handleUserPhotoMapping = async (state, data) => {
  const {userId, startSession, endSession} = data;
  try {
    await userPhotoMapping({userId, startSession, endSession});
  } catch (e) {
  
  }
}
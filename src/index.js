import { h, render } from 'preact';
import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import { Provider } from "redux-zero/preact";
import { Link, Route, Router, useLocation, Redirect, Switch } from 'wouter-preact';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import store from './store';

import {Projects} from './pages/Projects';
import {Users} from './pages/Users';
import {UserGallery} from './pages/UserGallery';
import {UserGalleryPhoto} from './pages/UserGalleryPhoto';
import {AddUser} from './pages/AddUser';


const DefaultRedirect = () => {
	const [, setLocation] = useLocation();
	useEffect(() => {
		setLocation('project');
	});
};

const currentLocation = () => {
	return window.location.hash.replace(/^#/, '') || '';
};

const useHashLocation = () => {
	const [loc, setLoc] = useState(currentLocation());

	useEffect(() => {
		const handler = () => {
			return setLoc(currentLocation());
		};
		window.addEventListener('hashchange', handler);
		return () => window.removeEventListener('hashchange', handler);
	}, []);

	const navigate = useCallback(to => (window.location.hash = to), []);

	return [loc, navigate];
};

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]); 

  return ref.current;
}

const App = () => {
  const [location] = useLocation()
  const prevLocation = usePrevious(location);
  const locationDepth = !!location ? location.split('|').length : 0;
  const prevLocationDepth = !!prevLocation ? prevLocation.split('|').length : 0;
  const direction = (locationDepth >= prevLocationDepth) ? 'forward' : 'backward';

  const timeout = { enter: 800, exit: 400 };


  return (
    <TransitionGroup component="div" className="App fullCanvas canvasSchoolProject schoolProjectUserList">
			<CSSTransition
				key={location}
				timeout={timeout}
				classNames="pageSlider"
				mountOnEnter={false}
				unmountOnExit={true}
			>
				<div className={direction === 'backward' ? 'left' : 'right'}>
          <Switch location={location}>
            <Route path="project|:projectid|user|:userid|photo|:photoid" component={UserGalleryPhoto} />
            <Route path="project|:projectid|user|:userid">{params => <UserGallery params={params} prevLocation={prevLocation} />}</Route>
            <Route path="project|:projectid|add_user">{params => <AddUser params={params} prevLocation={prevLocation} />}</Route>
            <Route path="project|:projectid">{params => <Users params={params} prevLocation={'project'} />}</Route>
            <Route path="project" component={Projects} />
            <Route path="/:rest*" component={DefaultRedirect} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )

}

pictime.photographer2 = pictime.photographer2 || {};
pictime.photographer2.userphotomap = function(options) {
  const mountNode = document.getElementById('pictimemain');

  render(
    <Provider store={store}>
      <Router hook={useHashLocation}>
        <App />
      </Router>
    </Provider>,
    mountNode,
    mountNode.lastChild
  );
};
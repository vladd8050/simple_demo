import { h, render, Fragment } from 'preact';

export const UserGalleryPhoto = ({params}) => (
	<Fragment>
		<div id="canvas1" className="fullCanvas canvasSchoolProject schoolProjectUserList">
			<div className="title F2 S5 C8 W3 L3 U2" style={{ marginBottom: 30 }}>
				Users photo {params.photoid}
			</div>
		</div>
		<div id="canvas2" />
	</Fragment>
);

import { h, render, Fragment } from 'preact';
import { useState, useMemo, useCallback, useEffect, useLayoutEffect, useRef } from 'preact/hooks';
// import {Select} from '../../components/molecules/Select';
import { useUpdateEffect, useSessionStorage } from 'react-use';
import { Link, useLocation } from 'wouter-preact';
import { connect } from 'redux-zero/preact';

import {handleUserPhotoMapping} from '../../actions'


const photos = [
	{
		id: 1,
		title: 'something',
		img: 'https://picsum.photos/200/300?grayscale&random=1',
	},
	{
		id: 2,
		title: 'something',
		img: 'https://picsum.photos/300/300?grayscale&random=2',
	},
	{
		id: 3,
		title: 'something',
		img: 'https://picsum.photos/600/300?grayscale&random=3',
	},
	{
		id: 4,
		title: 'something',
		img: 'https://picsum.photos/300/200?grayscale&random=4',
	},
	{
		id: 5,
		title: 'something',
		img: 'https://picsum.photos/200/300?grayscale&random=5',
	},
	{
		id: 6,
		title: 'something',
		img: 'https://picsum.photos/200/300?grayscale&random=6',
	},
	{
		id: 7,
		title: 'something',
		img: 'https://picsum.photos/200/300?grayscale&random=7',
	},
	{
		id: 8,
		title: 'something',
		img: 'https://picsum.photos/200/300?grayscale&random=8',
	},
];

const mapToProps = ({ }) => ({});

const actions = store => ({
	_handleUserPhotoMapping: handleUserPhotoMapping,
});

export const UserGallery = connect(
	mapToProps,
	actions
)(({params, prevLocation, _handleUserPhotoMapping}) => {
    const [capturingForUser, setCapturingForUser] = useSessionStorage('capturingForUser');
    const [isCaptureStarted, setCaptureStarted] = useSessionStorage('isCaptureStarted', false);
    const [captureStartTime, setCaptureStartTime] = useSessionStorage('captureStartTime', new Date());
    const [captureEndTime, setCaptureEndTime] = useSessionStorage('captureEndTime');
    useUpdateEffect(() => {
        if (capturingForUser !== params.userid) {
            setCapturingForUser(params.userid);
            setCaptureStarted(false);

        }
    })
    const handleCaptupingStart = () => {
        setCaptureStarted(true);
        setCaptureStartTime(new Date());
        _handleUserPhotoMapping({
            userId: params.userid,
            startSession: captureStartTime,
            endSession: null
        })
    }    
    const handleCaptupingEnd = () => {
        setCaptureStarted(false);
        setCaptureEndTime(new Date());
        _handleUserPhotoMapping({
            userId: params.userid,
            startSession: captureStartTime,
            endSession: captureEndTime
        })
    }
    return (
		<>
			<div className="ScrollArea">
            <Link href={`project|${params.projectid}`}>
				<a class="back F1 S3 CH8 C6 W2 L1 U1">&lt; Back</a>
			</Link>
				<div className="title F2 S5 C8 W3 L3 U2" style={{ marginBottom: 30 }}>
					Users photos
				</div>
				{/* <Select /> */}
				<div className="photosWrapper">
					<div className="photos">{photos && photos.map(photo => <img src={photo.img} />)}</div>
				</div>
			</div>
			<div
				className="footer"
				style={{
					position: 'absolute',
					height: 82,
					width: '100vw',
					bottom: 0,
					left: 0,
					backgroundColor: '#f5f5f5',
					display: 'flex',
                    flexDirection: 'column'
				}}
			>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5vw 1vw', alignItems: 'baseline'}}>
					<div>Camera</div>
					<div className="pSelect">
						<div id="undefined-dd-placeholder" className="dd-container">
							<div className="dd-select" style={{ background: 'rgb(238, 238, 238)' }}>
								<input className="dd-selected-value" type="hidden" defaultValue={2} />
								<a className="dd-selected">
									<label className="dd-selected-text">Nikon Z8 David</label>
								</a>
								<span className="dd-pointer dd-pointer-down" />
							</div>
							{/*<ul
								className="dd-options dd-click-off-close"
								style={{ overflow: 'hidden', display: 'block', top: -115 }}
							>
								<li>
									<a className="dd-option">
										{' '}
										<input className="dd-option-value" type="hidden" defaultValue={1} />{' '}
										<label className="dd-option-text">Camera #1</label>
									</a>
								</li>
								<li>
									<a className="dd-option dd-option-selected">
										{' '}
										<input className="dd-option-value" type="hidden" defaultValue={2} />{' '}
										<label className="dd-option-text">Nikon Z8 David</label>
									</a>
								</li>
								<li>
									<a className="dd-option">
										{' '}
										<input className="dd-option-value" type="hidden" defaultValue={3} />{' '}
										<label className="dd-option-text">Camera #3</label>
									</a>
								</li>
							</ul>*/}
						</div>
					</div>
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '0.5vw 1vw', alignItems: 'center', height: 30}}>
                    {!isCaptureStarted && <div onClick={handleCaptupingStart}>Start capture</div>}
                    {!!isCaptureStarted && <div onClick={handleCaptupingEnd}>Stop capture</div>}
                </div>
			</div>
		</>
	);
});

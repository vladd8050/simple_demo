import { h, render, Fragment } from 'preact';
// import { useState, useMemo, useCallback, useEffect } from 'preact/hooks';
import { connect } from "redux-zero/preact";
import { Link, useLocation } from 'wouter-preact';
import useForm from 'react-hook-form';
// import * as yup from 'yup';
import is from 'is_js';

import {saveNewUser} from '../../actions';


const mapToProps = () => {};

const actions = store => ({
	handleSaveNewUser: saveNewUser,
});


export const AddUser = connect(
	mapToProps,
	actions
)(({params, prevLocation, handleSaveNewUser}) => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [, setLocation] = useLocation();
	const onSubmit = async data => { 
		await handleSaveNewUser({
			projectId: params.projectid,
			user: data
		});
		setLocation(`project|${params.projectid}`)

	}
	return (
	<Fragment>
		<div className="ScrollArea">
			<Link href={`project|${params.projectid}`}>
				<a class="back F1 S3 CH8 C6 W2 L1 U1">&lt; Back</a>
			</Link>
			<div className="title F2 S5 C8 W3 L3 U2" style={{ marginBottom: 30 }}>
				Add uew user
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
			<div className="loginPanel pictimeZForm form pictimeZFormText">
				<div className={`field textField${!!errors.name ? ' fieldInvalid' : ''}`} data-fldid="name" data-field={0}>
					<label className="empty" htmlFor="rform_pt1_0" />
					<input
						autoComplete="name"
						className="control textControl pictimeZFormInput"
						name="name"
						placeholder={_pt$.lng.watermark_Name}
						type="text"
						ref={register({ required: _pt$.lng.zform_vld_required })}
					/>
					{errors.name && <div className="validationError pictimeZFormError">{errors.name.message}</div>}
				</div>
				<div className={`field textField${!!errors.email ? ' fieldInvalid' : ''}`} data-fldid="email" data-field={1}>
					<label className="empty" htmlFor="rform_pt1_1" />
					<input
						autoComplete="email"
						className="control textControl pictimeZFormInput"
						name="email"
						placeholder={_pt$.lng.emailWM}
						type="text"
						ref={register({
							required: _pt$.lng.zform_vld_required,
							validate: value => is.email(value) || _pt$.lng.zform_vld_email 
						})}
					/>
					{errors.email && <div className="validationError pictimeZFormError">{errors.email.message}</div>}
				</div>
				{/* <input type="submit" styles={{ width: 0, height: 0, padding: 0, border: 'none' }} /> */}
			</div>
			<div className="buttons">
				<input type="submit" className="loginButton pButton pLarge F2 S2 C8 BC3 BCH4 W2 L2 U2" value={_pt$.lng.setup.btnSave}/>
			</div>
			</form>
		</div>
	</Fragment>
)});

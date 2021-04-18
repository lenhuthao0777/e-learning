import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, FormGroup, Label } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router';
import qs from 'qs';
function Loginpage() {
	const dispatch = useDispatch();
	const { userInfo, isLoading, error } = useSelector(
		(state) => state.authReducer
	);
	const location = useLocation();
	// useEffect(()=>{

	// })
	// controlled compoent: conttrol tat ca moi thu tren dao dien bang state, props
	// uncontrooled component: controll dao dien ko thong qua state , props
	// ca usestate va useref deu dung luu tru data
	// khac: ref thay doi data trong component ko render lai
	// const inputTaiKhoan = useRef();
	// const inputMatKhau = useRef();
	const handelLogin = (value) => {
		// console.log(inputTaiKhoan.current.value);
		// console.log(inputMatKhau.current.value);
		console.log(value);
		dispatch(login(value));
	};
	const schema = yup.object().shape({
		taiKhoan: yup
			.string()
			.required('tai khoan ko dc de trong')
			.min(5, 'tai khoan tu 5 den 20 ky tu')
			.max(20, 'tai khoan < 20 ky tu'),
		matKhau: yup.string().required('mat khau ko dc de trong'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		// su dung khi component ko ho tro register
		control,
	} = useForm({ resolver: yupResolver(schema) });
	console.log(errors);

	// tao schema validation
	// userInfo co data chuyen den trang home
	if (userInfo) {
		const { redirectTo } = qs.parse(location.search, {
			ignoreQueryPrefix: true,
		});
		if (redirectTo) {
			return <Redirect to={redirectTo} />;
		}
	}
	return (
		<form onSubmit={handleSubmit(handelLogin)}>
			{/* <h1>Login page</h1>
			<input
				type='text'
				{...register('taiKhoan', {
					required: {
						value: true,
						message: 'tai khoan khong duoc de trong',
					},
					minLength: {
						value: 5,
						message: 'tai khoan tu 5 den 20 ky tu',
					},
					maxLength: {
						value: 20,
						message: 'tai khoan < 20 ky tu',
					},
				})}
				placeholder='tai khoan'
			/>
			{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			<input
				type='text'
				{...register('matKhau', { required: true })}
				placeholder='mat khau'
			/>
			{errors.matKhau && <div>mat khau ko dc de trong</div>} */}
			<FormGroup>
				<Label>Tai Khoan</Label>
				<Input type='text' {...register('taiKhoan')} />
				{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			</FormGroup>
			<FormGroup>
				<Label>Mat Khau</Label>
				<Input type='text' {...register('matKhau')} />
				{errors.matKhau && <div>{errors.matKhau.message}</div>}
			</FormGroup>
			{/* <FormGroup>
				<Controller
					name='taiKhoan'
					control={control}
					defaultValue=''
					rules={{
						required: {
							value: true,
							message: 'mat khau ko dc de trong',
						},
					}}
					render={({ field }) => {
						return <Input {...field} />;
					}}
				/>
				{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			</FormGroup> */}
			{error && <div>{error}</div>}
			<button>Login</button>
		</form>
	);
}

export default Loginpage;

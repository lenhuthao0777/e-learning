import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, FormGroup, Label } from 'reactstrap';
function Loginpage() {
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
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		// su dung khi component ko ho tro register
		control,
	} = useForm();
	console.log(errors);
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
			{/* <FormGroup>
				<Label>Tai Khoan</Label>
				<Input
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
				/>
				{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			</FormGroup>
			<FormGroup>
				<Label>Mat Khau</Label>
				<Input
					type='text'
					{...register('matKhau', {
						required: {
							value: true,
							message: 'mat khau khong duoc de trong',
						},
						minLength: {
							value: 5,
							message: 'mat khau tu 5 den 20 ky tu',
						},
						maxLength: {
							value: 20,
							message: 'mat khau < 20 ky tu',
						},
					})}
				/>
				{errors.matKhau && <div>{errors.matKhau.message}</div>}
			</FormGroup> */}
			<FormGroup>
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
			</FormGroup>
			<button>Login</button>
		</form>
	);
}

export default Loginpage;

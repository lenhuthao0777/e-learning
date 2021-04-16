import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Banner() {
	return (
		<div className='container'>
			<div
				className='banner'
				style={{
					backgroundImage: 'url(./img/cover.jpg)',
					width: '100%',
					height: '400px',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div className='banner-content'>
					<h1>Perfect yourself, today</h1>
					<p>
						It's the last day to learn skills for your future from
						US $ 11.99
					</p>
					<div className='banner-content__input'>
						<input
							type='text'
							placeholder='What do you want to learn ?'
						/>
						<button>
							<SearchOutlinedIcon className='banner-icon' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;

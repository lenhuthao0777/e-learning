import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import UdeAvatar from '../avatar/index';
// const menu = ['Development', 'Business','', 'Marketing']
function Navbar() {
	const [SideBar, setSideBar] = useState(false);
	return (
		<>
			<div className='header--navbar'>
				<div className='header--navbar__icon-menu'>
					<button
						className='header--navbar__icon-menu__btn'
						onClick={() => setSideBar(true)}>
						<MenuIcon className='menu-icon' />
					</button>
				</div>
				<div className='header--navbar__logo'>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<img src='./img/logo-coral.svg' alt='' />
					</Link>
				</div>
				<div className='header--navbar__category'>
					<span>Categories</span>
					<div
						className='header--navbar__category-submenu'
						style={{ transition: '.3s ease in' }}>
						<ul className='header--navbar__category-submenu__list'>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Development
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Development
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Wed Development
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Html & Css
													</li>
													<li className='drop-right__2-list-item'>
														Vue Js
													</li>
													<li className='drop-right__2-list-item'>
														React Js
													</li>
													<li className='drop-right__2-list-item'>
														Node Js
													</li>
													<li className='drop-right__2-list-item'>
														Java
													</li>
													<li className='drop-right__2-list-item'>
														Python
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Data Science
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														All Data Science
													</li>
													<li className='drop-right__2-list-item'>
														Python
													</li>
													<li className='drop-right__2-list-item'>
														Machine Learning
													</li>
													<li className='drop-right__2-list-item'>
														Deep Learning
													</li>
													<li className='drop-right__2-list-item'>
														Data Analysis
													</li>
													<li className='drop-right__2-list-item'>
														Artificial Intelligence
													</li>
													<li className='drop-right__2-list-item'>
														R
													</li>
													<li className='drop-right__2-list-item'>
														Popular topics
													</li>
													<li className='drop-right__2-list-item'>
														TensorFlow
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Mobile Development
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														All Mobile Development
													</li>
													<li className='drop-right__2-list-item'>
														Google Flutter
													</li>
													<li className='drop-right__2-list-item'>
														Android Development
													</li>
													<li className='drop-right__2-list-item'>
														IOS Development
													</li>
													<li className='drop-right__2-list-item'>
														React Native
													</li>
													<li className='drop-right__2-list-item'>
														Swift
													</li>
													<li className='drop-right__2-list-item'>
														Dart Programming
														Language
													</li>
													<li className='drop-right__2-list-item'>
														Kotlin
													</li>
													<li className='drop-right__2-list-item'>
														SwiftUI
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Programming Languages
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Java
													</li>
													<li className='drop-right__2-list-item'>
														JavaScript
													</li>
													<li className='drop-right__2-list-item'>
														C#
													</li>
													<li className='drop-right__2-list-item'>
														C++
													</li>
													<li className='drop-right__2-list-item'>
														Php
													</li>
													<li className='drop-right__2-list-item'>
														Python
													</li>
													<li className='drop-right__2-list-item'>
														Spring Famework
													</li>
													<li className='drop-right__2-list-item'>
														Go Progamming Language
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Game Development
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Database Design & Development
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Software Testing
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Software Engineering
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												Development Tools
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												No-Code Development
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Business
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Finance & Accounting Courses
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Finance & Accounting Courses
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									IT & Software
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Office Productivity
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Personal Development
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Design
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Marketing
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Lifestyle
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Photography & Video
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Health & Fitness
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Music
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className='header--navbar__category-submenu__list-item'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									Teaching & Academics
									<KeyboardArrowRightIcon className='angleRightIcon' />
								</Link>
								<div className='drop-right'>
									<ul className='drop-right__list'>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All Business
											</Link>
										</li>
										<li className='drop-right__list-item'>
											<Link
												to='/'
												style={{
													textDecoration: 'none',
												}}>
												All
												<KeyboardArrowRightIcon className='angleRightIcon' />
											</Link>
											<div className='drop-right__2'>
												<h3 className='drop-right__2-heading'>
													Popular Topics
												</h3>
												<ul className='drop-right__2-list'>
													<li className='drop-right__2-list-item'>
														Css
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className='header--navbar__input'>
					<form action=''>
						<button>
							<SearchOutlinedIcon className='searchIcon' />
						</button>
						<input type='text' placeholder='Search for anything' />
					</form>
				</div>
				<div className='header--navbar__gap-button'>
					<Link
						style={{ textDecoration: 'none' }}
						className='header--navbar__gap-button-text'
						to='/home'>
						Udemy for Business
					</Link>
					<div className='header--navbar__gap-button_business'>
						<div className='header--navbar__gap-button_business-content'>
							<div className='content-text'>
								<span>
									Get your team access to over 5,500 top Udemy
									courses, anytime, anywhere.
								</span>
							</div>
							<Button
								type='button'
								color='btn--btn-primary'
								size='full'>
								Try Udemy for Business
							</Button>
						</div>
					</div>
				</div>
				<div className='header--navbar__gap-button'>
					<Link
						style={{ textDecoration: 'none' }}
						className='header--navbar__gap-button-text'
						to='/home'>
						Teach on Udemy
					</Link>
					<div className='header--navbar__gap-button_teach'>
						<div className='header--navbar__gap-button_teach-content'>
							<div className='content-text'>
								<span>
									Turn what you know into an opportunity and
									reach millions around the world.
								</span>
							</div>
							<Button
								type='button'
								color='btn--btn-primary'
								size='full'>
								Learn More
							</Button>
						</div>
					</div>
				</div>
				<div className='header--navbar__cart'>
					<Link to='/cart'>
						<ShoppingCartOutlinedIcon className='cart-icon' />
					</Link>
					<div className='header--navbar__cart-quantity'>
						<span>2</span>
					</div>
					<div className='header--navbar__cart-list'>
						<ul className='header--navbar__cart-list-courses'>
							<li className='header--navbar__cart-list-courses__item'>
								<div className='courses--item__img'>
									<img
										src='https://img-a.udemycdn.com/course/100x100/875276_6906_5.jpg?-F6K0Twk7Va-Vdf-EZJ3hjFCoZY7jYzJ3BxxyUVGsvt-bLx98ZhBMpcb-_3BKkePIuWg7ISgf5bAF1kRzDQ7LYC8r6Nk35BSdJAYIZzhBj0JJ8b5ijtj-W-Wgk2v79o'
										alt=''
									/>
								</div>
								<div className='header--navbar__cart-list-courses__item-infor'>
									<div className='cart--courses__name'>
										<h3>
											AngularJS and Node.js | Complete
											Guide
										</h3>
									</div>
									<div className='cart--courses__author'>
										<span>Rudy Nappe</span>
									</div>
									<div className='cart--courses__price'>
										<span className='cart--courses__price-new'>
											USD 11.99
										</span>
										<span className='cart--courses__price-old'>
											USD 99.99
										</span>
									</div>
								</div>
							</li>
							<li className='header--navbar__cart-list-courses__item'>
								<div className='courses--item__img'>
									<img
										src='https://img-a.udemycdn.com/course/100x100/875276_6906_5.jpg?-F6K0Twk7Va-Vdf-EZJ3hjFCoZY7jYzJ3BxxyUVGsvt-bLx98ZhBMpcb-_3BKkePIuWg7ISgf5bAF1kRzDQ7LYC8r6Nk35BSdJAYIZzhBj0JJ8b5ijtj-W-Wgk2v79o'
										alt=''
									/>
								</div>
								<div className='header--navbar__cart-list-courses__item-infor'>
									<div className='cart--courses__name'>
										<h3>
											AngularJS and Node.js | Complete
											Guide
										</h3>
									</div>
									<div className='cart--courses__author'>
										<span>Rudy Nappe</span>
									</div>
									<div className='cart--courses__price'>
										<span className='cart--courses__price-new'>
											USD 11.99
										</span>
										<span className='cart--courses__price-old'>
											USD 99.99
										</span>
									</div>
								</div>
							</li>
						</ul>
						<div className='header--navbar__cart-list__total'>
							<div className='cart-sub--total'>
								<span className='cart-sub--total__new'>
									Total US $ 23.98
								</span>
								<span className='cart-sub--total__old'>
									US $ 192.98
								</span>
							</div>
							<div className='cart-button__pay'>
								<Button
									type='button'
									color='btn btn--btn-primary'
									size='full'>
									Go to shopping cart
								</Button>
							</div>
						</div>
					</div>
					<div className='header--navbar__cart-no_cart'></div>
				</div>
				<div className='header--navbar__login'>
					<Link to='/login' style={{ textDecoration: 'none' }}>
						<Button
							type='button'
							color='btn--btn-outline'
							size='md'>
							Sign up
						</Button>
					</Link>
				</div>
				<div className='header--navbar__signup'>
					<Button type='button' color='btn--btn-primary' size='md'>
						Button
					</Button>
				</div>
				<div className='header--navbar__language'>
					<Button
						type='button'
						color='btn--outline-no-hover'
						size='sm'>
						<LanguageOutlinedIcon />
					</Button>
				</div>
				<div className='header--navbar__icon-mobile'>
					<span className='header--navbar__icon-mobile-search'>
						<SearchOutlinedIcon className='search-icon__mobile' />
					</span>
					<span className='header--navbar__icon-mobile-cart'>
						<Link to='/cart' style={{ textDecoration: 'none' }}>
							<ShoppingCartOutlinedIcon className='cart-icon__mobile' />
						</Link>
						<div className='cart-mobile__quantity'>
							<span>0</span>
						</div>
					</span>
				</div>
			</div>
			<div className='header-navbar--mobile'>
				<div className={`side-bar ${SideBar ? 'active' : ''}`}>
					<div
						className={`side-bar__button-click ${
							SideBar ? 'active' : ''
						}`}
						onClick={() => setSideBar(false)}>
						<div className='side-bar__button-click-close'>
							<button>
								<CloseIcon className='close-icon' />
							</button>
						</div>
					</div>
					<div className='side-bar__menu'>
						<div className='side-bar__menu-profile'>
							<ul className='side-bar__menu-profile__list'>
								<li>
									<button>
										<div className='profile-img'>
											<UdeAvatar
												AvatarSrc={
													'https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1'
												}
												size='AvatarMd'
											/>
										</div>
										<div className='profile-user__name'>
											<p className='user-name'>
												Hello, Funny Cat
											</p>
											<p className='welcome'>Welcome</p>
										</div>
										<KeyboardArrowRightIcon className='iconRightProfile' />
									</button>
								</li>
							</ul>
						</div>
						<div className='side-bar__menu-heading'>
							<h3>Apprendre</h3>
						</div>
						<div className='side-bar__menu-mon-apprentissage'>
							<ul>
								<li>
									<Link
										to='/'
										style={{
											textDecoration: 'none',
										}}>
										Mon apprentissage
									</Link>
								</li>
							</ul>
						</div>
						{/* <ul className='side-bar__menu-list'>
								<li className='side-bar__menu-list--item'>
									Development
								</li>
							</ul> */}
					</div>
				</div>
				<div
					className={`side-bar__overlay ${SideBar ? 'active' : ''}`}
					onClick={() => setSideBar(false)}></div>
			</div>
		</>
	);
}

export default Navbar;

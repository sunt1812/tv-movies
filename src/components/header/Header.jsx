import React, { useEffect, useRef } from 'react'
import { Link,useLocation } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/images/logo.png'
const headerNav = [
	{
		display:"home",
		path:"/",
	},
	{
		display:"movies",
		path:"/movie",
	},{
		display:"TV Series",
		path:"/tv",
	},
]
const Header = () => {
	const {pathname} = useLocation()
	const active = headerNav.findIndex(e => e.path === pathname)
	const headeRef = useRef()
	useEffect(() => {
		const srinkHeader = () => {
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headeRef.current.classList.add("srink")
			}else {
				headeRef.current.classList.remove("srink")
			}
		}
		 window.addEventListener("scroll",srinkHeader)
		return () => {
			window.removeEventListener("scroll",srinkHeader)
		}
	}, []);
  return (
    <header className="header" ref={headeRef}>
        <div className="header__wrap container">
			<div className="header__wrap__logo">
				<img src={logo} alt="" />
				<Link to="/">TV Movies</Link>
			</div>
			<ul className="header__wrap__nav">
				{headerNav.map((item,index) => (
					<li key={index} className={`${index === active?"active":""}`}>
						<Link to={item.path}>{item.display}</Link>
					</li>
				))}
			</ul>
		</div>
    </header>
  )
}

export default Header
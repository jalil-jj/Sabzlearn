import React, { useContext, useEffect, useState } from 'react'
import AuthContex from '../../Contex/authContex'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbsr() {

    const authContex = useContext(AuthContex)

    const [allMenus, setAllMenus] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/v1/menus`)
            .then(res => res.json())
            .then(data =>setAllMenus(data))
    }, [])


    return (
        <div class="main-header">
            <div class="container-fluid">
                <div class="main-header__content">
                    <div class="main-header__right">
                        <img
                            src="/images/logo/Logo.png"
                            class="main-header__logo"
                            alt="لوگوی سبزلرن"
                        />

                        <ul class="main-header__menu">
                            <li class="main-header__item">
                                <a href="#" class="main-header__link">
                                    صفحه اصلی
                                </a>
                            </li>

                            {
                                allMenus.map(menu => (
                                    <li class="main-header__item">
                                        <Link to={`/category-info/${menu.href}/1`} class="main-header__link">
                                            {menu.title}
                                            {
                                                menu.submenus.length !== 0 && (
                                                    <>
                                                        <i class="fas fa-angle-down main-header__link-icon"></i>
                                                        <ul class="main-header__dropdown">
                                                            {menu.submenus.map(submenu => (
                                                                <li class="main-header__dropdown-item">
                                                                    <Link to={submenu.href} class="main-header__dropdown-link">
                                                                        {submenu.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )
                                            }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div class="main-header__left">
                        <a href="#" class="main-header__search-btn">
                            <i class="fas fa-search main-header__search-icon"></i>
                        </a>
                        <a href="#" class="main-header__cart-btn">
                            <i class="fas fa-shopping-cart main-header__cart-icon"></i>
                        </a>

                        {
                            authContex.logedIn ? (
                                <Link to="#" class="main-header__profile">
                                    <span class="main-header__profile-text">{authContex.userInfos.name}</span>
                                </Link>
                            ) : (
                                <Link to="/login" class="main-header__profile">
                                    <span class="main-header__profile-text">ورود / ثبت نام</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

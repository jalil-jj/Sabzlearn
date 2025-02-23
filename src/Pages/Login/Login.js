import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import Input from '../../Components/Form/Input'
import { useForm } from "../../hooks/useForm";
import AuthContex from "../../Contex/authContex";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

import { requiredValidator, minValidator, maxValidator } from '../../validators/ruls'

import "./Login.css";
import Button from "../../Components/Form/Button";

export default function Login() {

  const navigate = useNavigate()

  const authContex = useContext(AuthContex)

  const [formState, onInputHandler] = useForm({
    username: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)


  const userLogin = (event) => {
    event.preventDefault()

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value
    }


    fetch(`http://localhost:4000/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => {
        if (!res.ok) {
          return res.text().then(text => {
            throw new Error(text)
          })
        } else {
          return res.json()
        }
      })
      .then(result => {
        swal({
          title: 'با موفقیت وارد شدید (:',
          icon: "success",
          buttons: 'رفتن به پنل'
        }) .then(res => {
          navigate('/')
        })
        authContex.login({}, result.accessToken)
      })
      .catch(err => {
        swal({
          title: 'همچین کاربری در سایت وجود ندارد :(',
          icon: "error",
          buttons: 'تلاش دوباره',
        })
      })

  }




  return (
    <>
      <Topbar />
      <Navbar />

      <section class="login-register">
        <div class="login">
          <span class="login__title">ورود به حساب کاربری</span>
          <span class="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div class="login__new-member">
            <span class="login__new-member-text">کاربر جدید هستید؟</span>
            <Link class="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">
              <Input
                element='input'
                id='username'
                className='login-form__username-input'
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
                onInputHandler={onInputHandler}
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>
            <div class="login-form__password">
              <Input
                className="login-form__password-input"
                type="text"
                id='password'
                placeholder="رمز عبور"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(11)
                ]}
                onInputHandler={onInputHandler}
              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              className={`login-form__btn ${formState.isFormValid
                ? "login-form__btn-success"
                : "login-form__btn-error"
                }`}
              onClick={userLogin}
              type="submit">
              <i class="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span class="login-form__btn-text">ورود</span>
            </Button>
            <div class="login-form__password-setting">
              <label class="login-form__password-remember">
                <input class="login-form__password-checkbox" type="checkbox" />
                <span class="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label class="login-form__password-forget">
                <a class="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div class="login__des">
            <span class="login__des-title">سلام کاربر محترم:</span>
            <ul class="login__des-list">
              <li class="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li class="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li class="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import auth from '../redux/actions/auth'
import { connect } from 'react-redux'
import { Input, Container, Form, Alert, Modal, ModalBody, Spinner } from 'reactstrap'
import logo from '../assets/img/logo.png'
import style from '../assets/css/input.module.css'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'

const loginSchema = Yup.object().shape({
  username: Yup.string().required('must be filled'),
  password: Yup.string().required('must be filled')
});

export default function Login() {
  const dispatch = useDispatch()

  const authDucer = useSelector((state) => state.auth)
  const isLogin = authDucer.isLogin

  const navigate = useNavigate()

  const login = async (values) => {
    await dispatch(auth.login(values))
    const { isLogin } = authDucer
    console.log('king2')
    dispatch(auth.resetError())
    navigate('/')
  }

  return (
    <>
      {isLogin === false ? (
        <Alert color="danger" className={style.alertWrong}>
          username or password invalid !
        </Alert>
      ) : (
        <div></div>
      )}
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => { login(values); resetForm({ values: '' }) }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, }) => (
          <Form className={style.bodyLogin}>
            <div className={style.imgLogin}>
              <img src={logo} alt='logo' className={style.imgBig} />
            </div>
            <div className={style.form}>
              <div className={style.textLogin}>Please login with your account</div>
              <div>
                <input
                  className={style.input1}
                  placeholder='Username'
                  type='name'
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </div>
              {errors.username ? (
                <text className={style.txtError}>{errors.username}</text>
              ) : null}
              <div>
                <input
                  className={style.input2}
                  placeholder='Password'
                  type='password'
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </div>
              {errors.password ? (
                <text className={style.txtError}>{errors.password}</text>
              ) : null}
              <button disabled={(values.username === 'p000' || values.username === 'P000') && values.cost_center === '' ? true : false} onClick={handleSubmit} className={style.button}>LOGIN</button>
            </div>
            <div className='icon mt-4'><AiOutlineCopyrightCircle size={18} className="mr-3" />OFR-PMA 2022</div>
          </Form>
        )}
      </Formik>
      <Modal isOpen={authDucer.isLoading ? true : false} size="sm">
        <ModalBody>
          <div>
            <div className={style.cekUpdate}>
              <Spinner />
              <div sucUpdate>Waiting....</div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}
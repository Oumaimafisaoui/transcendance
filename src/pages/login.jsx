// Login.tsx
"use client"
import React from 'react';
import styles from '../styles/login.module.css';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import fourty from '../../public/fourty.png';
import gog from '../../public/google.png';
import Navbar from '@/components/navbar/Navbar';
import Layout from '@/components/Layout/layout';
import register from './register'
import dashboard from './dashboard'


export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  //create two references
  const emailRef = useRef(null);
  const errRef = useRef();
 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    emailRef.current.focus();
  },[]);


  useEffect(() => {
    setError('');
  },[data]);
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(data);
    setSuccess(true);
  };

  const postData = (data) => {
    axios
      .post('http://10.13.5.7:9000/auth/login', data)
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((err) => console.log(err));
  };
  
  return (
    // < Navbar />
    <Layout>
      {
        success ? <section>
          <h1>Success</h1>
          </section> : (
          <div className={styles.container}>
          <div className={styles.auth}>
            <button className={styles.button}><Image className={styles.logo} alt="" src={fourty}/><div>Login with Intra</div></button>
            <button className={styles.button}><Image className={styles.logoTwo} alt="" src={gog}/>Login with Google</button>
            <div className={styles.or}>Or</div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.infos}>
              <p ref={errRef} className="text-red" aria-live="asserive">error</p>
              <h1 className={styles.title}>Log In</h1>
              <label className={styles.label}>
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                name="email"
                value={data.email}
                onChange={handleChange}
                ref={emailRef}
                required
                />
              <label className={styles.label}>
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                />
              <button className={styles.logIn}>Login</button>
            </div>
            <Link href="register">You do not have an account ? Sign Up.</Link>
          </form>
        </div>
        )
      }
    
    </Layout>
  );
};

export default Login;

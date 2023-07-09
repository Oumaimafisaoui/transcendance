// Login.tsx
import React from 'react';
import styles from '../styles/register.module.css';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import fourty from '../../public/bg.svg';
import gog from '../../public/bg.svg';
import Layout from '@/components/Layout/layout';

export const Register = () => {
  const [data, setData] = useState({
    username:'',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData(data);
  };

  const postData = (data: { username:string; email: string; password: string}) => {
    axios
      .post('http://localhost:3000/api/login', data)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  };
  
  
  return (
    // < Navbar />
    <Layout>
    <div className={styles.container}>
      <div className={styles.auth}>
        <button className={styles.button}><Image className={styles.logo} alt="" src={fourty}/><div>Register with Intra</div></button>
        <button className={styles.button}><Image className={styles.logoTwo} alt="" src={gog}/>Register with Google</button>
        <div className={styles.or}>Or</div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.infos}>
          <h1 className={styles.title}>Sign Up</h1>
          <label className={styles.label}>
            Username:
          </label>
          <input
            type="username"
            placeholder="Username"
            className={styles.input}
            name="username"
            value={data.username}
            onChange={handleChange}
            required
          />
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
          <button className={styles.logIn}>Register</button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default Register;

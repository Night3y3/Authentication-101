import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import { useFormik } from 'formik';
import { IoEye, IoEyeOff } from "react-icons/io5";

import avatar from '../assets/profile.json';
import styles from '../styles/username.module.css';
import { registerValidate } from '../helper/validate';
import convertImageToBase64 from '../helper/convert';

interface RegisterProps {
  // Define prop types here
}

const Register: React.FC<RegisterProps> = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<string | undefined>(undefined);

  const iconStyle = {
    size: 20,
    style: {
      opacity: 0.7,
    },
  };

  // Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' })
      console.log(values);
    },
  });

  // Formik does not support file upload so we need a handler
  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const base64 = await convertImageToBase64(e.target.files[0]);
      setFile(base64);
    }
  }


  return (
    <div className="container mx-auto">

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='flex flex-col items-center title'>
            <h1 className='text-5xl font-bold'>Register</h1>
            <span className='pt-2 -mb-4 text-xl w-2/3 text-center text-gray-300'>Create new Account</span>
          </div>

          <form action="" method="post" className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
                {file ? <img src={file} alt="profile" className={styles.profile} /> : <Lottie
                  loop={false}
                  animationData={avatar}
                  play
                  className={styles.profile}
                />
                }

              </label>
              <input onChange={onUpload} type="file" id='profile' name='profile' />

            </div>

            <div className="textbox flex flex-col items-center gap-2">
              {/* Direct new initialValues can be added from getFieldProps too */}
              <input {...formik.getFieldProps('email')} className={styles.textbox} type='email' placeholder='email*' />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type='text' placeholder='username*' />
              <div className=' flex flex-row'>
                <input {...formik.getFieldProps('password')} className={styles.textbox} type={showPassword ? 'text' : 'password'} placeholder='password*' />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className=' bg-transparent border-none cursor-pointer ml-[-28px]'
                >
                  {showPassword ? <IoEye {...iconStyle} /> : <IoEyeOff {...iconStyle} />}
                </button>

              </div>
              <Link to="/verify" className={styles.btn}>
                <button type='submit'>Sign Up</button>
              </Link>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Already have a account? <Link className=' text-blue-500 no-underline' to="/">Click here</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
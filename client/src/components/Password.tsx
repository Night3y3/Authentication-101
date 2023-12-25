import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import { useFormik } from 'formik';
import { IoEye, IoEyeOff } from "react-icons/io5";

import avatar from '../assets/profile.json';
import styles from '../styles/username.module.css';
import { passwordValidate } from '../helper/validate';

interface PasswordProps {
    // Define prop types here
}

const Password: React.FC<PasswordProps> = () => {

    const [showPassword, setShowPassword] = useState(false);

    const iconStyle = {
        size: 20,
        style: {
            opacity: 0.7,
        },
    };

    // Formik
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        },
    });
    return (
        <div className="container mx-auto">

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className='flex flex-col items-center title'>
                        <h1 className='text-5xl font-bold'>Hello Amigose</h1>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-300'>Explore More by moving forword</span>
                    </div>

                    <form action="" method="post" className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <Lottie
                                loop={false}
                                animationData={avatar}
                                play
                                className={styles.profile}
                            />
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            {/* Direct new initialValues can be added from getFieldProps too */}
                            <div className=' flex flex-row'>
                                <input {...formik.getFieldProps('password')} className={styles.textbox} type={showPassword ? 'text' : 'password'} placeholder='password' />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className=' bg-transparent border-none cursor-pointer ml-[-28px]'
                                >
                                    {showPassword ? <IoEye {...iconStyle} /> : <IoEyeOff {...iconStyle} />}
                                </button>

                            </div>
                            <button type='submit' className={styles.btn}>Sign Up</button>
                        </div>

                        <div className="text-center py-4">
                            <span className='text-gray-500'>Forgot Password? <Link className=' text-blue-500 no-underline' to="/recovery">Click here</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Password;
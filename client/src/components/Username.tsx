import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import { useFormik } from 'formik';

import avatar from '../assets/profile.json';
import styles from '../styles/username.module.css';
import { userValidate } from '../helper/validate';

interface UsernameProps {
    // Define prop types here
}

const Username: React.FC<UsernameProps> = () => {

    // Formik
    const formik = useFormik({
        initialValues: {
            username: '',
        },
        validate: userValidate,
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
                            <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='username' />
                            <button type='submit' className={styles.btn}>Lets Go</button>
                        </div>

                        <div className="text-center py-4">
                            <span className='text-gray-500'>Not a Member <Link className=' text-blue-500 no-underline' to="/register">Register Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Username;
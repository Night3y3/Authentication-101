import React, { useState } from 'react';
import { useFormik } from 'formik';
import { IoEye, IoEyeOff } from "react-icons/io5";

import styles from '../styles/username.module.css';
import { resetPasswordValidate } from '../helper/validate';

interface ResetProps {
    // Define prop types here
}

const Reset: React.FC<ResetProps> = () => {

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepPassword, setShowRepPassword] = useState(false);

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
            confirm_password: '',
        },
        validate: resetPasswordValidate,
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
                        <h1 className='text-5xl font-bold'>Reset</h1>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-300'>Enter new Password.</span>
                    </div>

                    <form action="" method="post" className='pt-20' onSubmit={formik.handleSubmit}>

                        <div className="textbox flex flex-col items-center gap-6">
                            {/* Direct new initialValues can be added from getFieldProps too */}
                            <div className=' flex flex-row'>
                                <input {...formik.getFieldProps('password')} className={styles.textbox}
                                    type={showNewPassword ? 'text' : 'password'} placeholder='new password' />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className=' bg-transparent border-none cursor-pointer ml-[-28px]'
                                >
                                    {showNewPassword ? <IoEye {...iconStyle} /> : <IoEyeOff {...iconStyle} />}
                                </button>

                            </div>
                            <div className=' flex flex-row'>
                                <input {...formik.getFieldProps('confirm_password')} className={styles.textbox} type={showRepPassword ? 'text' : 'password'} placeholder='repeat password' />
                                <button
                                    type="button"
                                    onClick={() => setShowRepPassword(!showRepPassword)}
                                    className=' bg-transparent border-none cursor-pointer ml-[-28px]'
                                >
                                    {showRepPassword ? <IoEye {...iconStyle} /> : <IoEyeOff {...iconStyle} />}
                                </button>

                            </div>
                            <button type='submit' className={styles.btn}>Reset</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset;
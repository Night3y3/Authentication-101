import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import { useFormik } from 'formik';

import avatar from '../assets/profile.json';
import styles from '../styles/username.module.css';
import prof from '../styles/profile.module.css';
import { profileValidate } from '../helper/validate';
import convertImageToBase64 from '../helper/convert';

interface ProfileProps {
    // Define prop types here
}

const Profile: React.FC<ProfileProps> = () => {
    const [file, setFile] = useState<string | undefined>(undefined);

    // Formik
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            address: '',
        },
        validate: profileValidate,
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
                <div className={`${styles.glass} ${prof.glass}`}>
                    <div className='flex flex-col items-center title'>
                        <h1 className='text-5xl font-bold'>Profile</h1>
                        <span className='pt-2 -mb-4 text-xl w-2/3 text-center text-gray-300'>Update your details</span>
                    </div>

                    <form action="" method="post" className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <label htmlFor="profile">
                                {file ? <img src={file} alt="profile" className={`${styles.profile} ${prof.profile}`} /> : <Lottie
                                    loop={false}
                                    animationData={avatar}
                                    play
                                    className={`${styles.profile} ${prof.profile}`}
                                />
                                }

                            </label>
                            <input onChange={onUpload} type="file" id='profile' name='profile' />

                        </div>

                        <div className="textbox flex flex-col items-center gap-2">
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps('firstname')} className={`${styles.textbox} ${prof.textbox}`} type='text' placeholder='first name*' />
                                <input {...formik.getFieldProps('lastname')} className={`${styles.textbox} ${prof.textbox}`} type='text' placeholder='last name' />
                            </div>

                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${prof.textbox}`} type='text' placeholder='number*' />
                                <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${prof.textbox}`} type='email' placeholder='email*' />
                            </div>
                            {/* Direct new initialValues can be added from getFieldProps too */}

                            <input {...formik.getFieldProps('address')} className={styles.textbox} type='text' placeholder='address*' />

                            <button type='submit' className={styles.btn}>Update</button>
                        </div>

                        <div className="text-center py-4">
                            <span className='text-gray-500'>Come back later? <Link className=' text-blue-500 no-underline' to="/">Log out</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
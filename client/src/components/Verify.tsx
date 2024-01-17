import React from 'react';

import styles from '../styles/username.module.css';

interface VerifyProps {
    // Define prop types here
}

const Verify: React.FC<VerifyProps> = () => {

    return (
        <div className="container mx-auto">
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className='flex flex-col items-center title'>
                        <h1 className='text-5xl font-bold'>Verify</h1>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-300'>Enter OTP to verify account.</span>
                    </div>

                    <form action="" method="post" className='pt-20'>


                        <div className="textbox flex flex-col items-center gap-6">
                            <div className='input text-center'>
                                <span className='py-4 text-sm text-left text-gray-500'>Enter 6 digit OTP send to your email address</span>
                                <input className={styles.textbox} type="text" placeholder='OTP' />

                            </div>
                            <button type='submit' className={styles.btn}>Lets Go</button>
                        </div>

                        <div className="text-center py-4">
                            <span className='text-gray-500'>Didn't get OTP <button className=' text-red-500 no-underline' >Resend</button></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Verify;
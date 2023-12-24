import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import avatar from '../assets/profile.json';
import styles from '../styles/username.module.css';

interface UsernameProps {
    // Define prop types here
}

const Username: React.FC<UsernameProps> = () => {
    // Component logic using props
    return (
        <div className="container mx-auto">
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className='flex flex-col items-center title'>
                        <h1 className='text-5xl font-bold'>Hello Amigose</h1>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-300'>Explore More by moving forword</span>
                    </div>

                    <form action="" method="post" className='py-1'>
                        <div className='profile flex justify-center py-4'>
                            <Lottie
                                loop={false}
                                animationData={avatar}
                                play
                                className={styles.profile}
                            />
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input className={styles.textbox} type="text" placeholder='username' />
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
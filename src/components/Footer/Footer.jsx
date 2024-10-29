import React from 'react';
import './Footer.css'
import { addToLS, getStoreEmail, saveEmailToLS, } from '../../loginExperience/localStorage'

import { toast } from 'react-toastify';
const Footer = () => {

    const subscribe = () => {
        // toast("Please Add Coin")
        position: window.innerWidth < 768 ?
        toast.success("Congratulations! you subscribed successfully", {
             position:'top-center',
            
            autoClose: 2000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }): 
        toast.success("Congratulations! you subscribed successfully", {
            position:'top-right',
           
           autoClose: 2000, // Close after 3 seconds
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
       })

    }


    const alreadySubscribe = () => {
        // toast("Please Add Coin")
        position: window.innerWidth < 768 ?
        toast.info("You already subscribed!", {
             position: 'top-center',
            
            autoClose: 2000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }): 
        toast.info("You already subscribed!", {
            position: 'top-right',
           
           autoClose: 2000, // Close after 3 seconds
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
       })


    }


    return (
        <>
            <footer className="mt-20 relative ">


                {/* Upper section */}



                <div className="upper border  border-white absolute z-50 rounded-xl  w-11/12 mx-auto top-0 left-0 right-0  px-4 pb-4 pr-4 ">




                    <div className=" border py-7 border-gray-300 rounded-xl bg-f1  footer_upper   ">

                        <div className="p-12   text-center space-y-4">
                            <h6 className="text-3xl font-bold">Subscribe to our Newsletter</h6>
                            <p className="text-xl font-medium">Get the latest updates and news right in your inbox!</p>
                            <div className=" flex  flex-col md:flex-row  md:justify-center gap-4">
                                <input type="text" id='mail' placeholder="Enter your email" className="input-field" />
                                <button onClick={() => {

                                    const email = `${mail.value}`;
                                    console.log(email);

                                    const Email = getStoreEmail();
                                    const x = Email.find(x => x == email);
                                    if (x == undefined) {
                                        addToLS(email);
                                        subscribe();
                                    }
                                    else {
                                        alreadySubscribe();
                                    }
                                    mail.value = '';


                                }} className="gradient-button">Subscribe</button>
                            </div>



                        </div>





                    </div>
                </div>



                {/* Downer section */}

                <div className="downer  top-20 absolute z-20 bg-black w-full">
                    <div className="text-white bg-white    w-11/12 mx-auto">
                        {/* start from here */}
                        <div className='text-white pt-[260px] bg-black'>

                            <img className='mx-auto mt-36 md:mt-0' src="https://i.ibb.co.com/bvvGH8G/logo-footer.png" alt="" />


                            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 align-top pb-8'>
                                <div className="about space-y-3">

                                    <h3 className='text-lg font-semibold'>About</h3>
                                    <p className=''>We are a passionate team dedicated to providing the best services to our customers.</p>

                                </div>
                                <div className="links pl-10">

                                    <h3 className='text-lg font-semibold space-y-3 '>Quick Links</h3>

                                    <ul className='pl-8 list-disc'>
                                        <li>Home</li>
                                        <li>Services</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>


                                </div>
                                <div className="subscribes flex flex-col space-y-3 ">

                                    <h3 className='text-lg font-semibold'>Subscribe</h3>
                                    <p className=''>Subscribe to our newsletter for the latest updates.</p>

                                    <div className="  flex items-center gap-4">
                                        <input type="text" id='mail1' placeholder="Enter your email" className="input text-black input-bordered" />
                                        <button
                                            onClick={() => {

                                                const email = `${mail1.value}`;
                                                console.log(email);
                                                // addToLS(email);

                                                // subscribe();
                                                const Email = getStoreEmail();
                                                const x = Email.find(x => x == email);
                                                if (x == undefined) {
                                                    addToLS(email);
                                                    subscribe();
                                                }
                                                else {
                                                    alreadySubscribe();
                                                }

                                                mail1.value = '';

                                            }}
                                            className="gradient-button">Subscribe</button>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>



                    <footer className="footer  fBorder  footer-center bg-black text-white p-4">
                        <aside>
                            <p>@{new Date().getFullYear()} Indrojit. All Rights Reserved.</p>

                            {/* @2024 Your Company All Rights Reserved. */}
                        </aside>
                    </footer>

                </div>





            </footer>




        </>


    );
};

export default Footer;
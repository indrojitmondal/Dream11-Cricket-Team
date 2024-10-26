import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
   <footer className="mt-20 relative ">
                {/* Upper section */}
                <div className="upper border  border-white absolute z-50 rounded-xl  w-11/12 mx-auto top-0 left-0 right-0  px-4 pb-4 pr-4 ">

                <div className=" rounded-xl bg-f1  footer_upper   ">
                   
                <div className="p-8   text-center space-y-3">
                        <h6 className="text-3xl font-bold">Subscribe to our Newsletter</h6>
                        <p className="text-xl font-medium">Get the latest updates and news right in your inbox!</p>
                        <div className="join flex justify-center gap-4">
                            <input type="text" placeholder="Enter your email" className="input input-bordered" />
                             <button className="gradient-button">Subscribe</button>
                        </div>
                </div>
                
                
                
                  
                  
                  </div>
                </div>
               

                {/* Downer section */}

                <div className="downer  top-20 absolute z-20 bg-black w-full">
                    <div className="text-white bg-white    w-11/12 mx-auto">
                        {/* start from here */}
                        <div className='text-white pt-[180px] bg-black'>

                            <img className='mx-auto' src="https://i.ibb.co.com/bvvGH8G/logo-footer.png" alt="" />


                            <div className='mt-5 grid grid-cols-3 gap-5 align-top pb-8'>
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

                                    <div className="join  flex items-center gap-4">
                                        <input type="text" placeholder="Enter your email" className="input input-bordered" />
                                        <button className="gradient-button">Subscribe</button>
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
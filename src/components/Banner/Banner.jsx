import React from 'react';
import './Banner.css'

const Banner = ({handleCoin}) => {
    return (
        <div>

            <div
                className="hero bg-black min-h-96 mt-4 py-4 rounded-xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/Yd86kpj/bg-shadow.png)",
                }}>
                
                <div className="hero-content text-neutral-content text-center ">
                    <div className="pt-4">
                        {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                        <img className='mx-auto mt-10 ' src="https://i.ibb.co.com/xYw6mbj/banner-main.png" alt="" />

                        <h2 className='text-5xl font-bold py-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p className="mb-5 text-2xl">
                        Beyond Boundaries Beyond Limits
                        </p>
                        <button 
                         onClick={()=>{
                            handleCoin(1500000);
                            alert(`Added 1500000`);
                         }}
                         className="bg-credit text-black px-4 py-2 rounded-xl">Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
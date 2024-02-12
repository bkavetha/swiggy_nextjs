import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '@/pages/images/swiglogo.png';
import Image from 'next/image';
import offer from '@/pages/images/offer.svg';
import call from '@/pages/images/call.svg';
import rating from '@/pages/images/rating.svg';
import styles from '@/styles/Home.module.css';
import Empty from './Empty';
import Link from 'next/link';


function Resturent() {
    const [item, setItem] = useState('Veg');
    const [data, setData] = useState([]);

    const handleToggle = () => {
        setItem((prevItem) => (prevItem === 'Veg' ? 'Non-veg' : 'Veg'));
    };

    useEffect(() => {
        fetch('http://localhost:3008/data2')
            .then(res => res.json())
            .then(json => {
                setData(json);
                console.log(json);
            })
    }, [])

    return (
        <div>
            {/* Navbar */}

            <div className='navbar navbar-expand-lg bg-light mb-5 fixed-top'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <Link href='/'>
                            <Image src={logo} height={35} width={'auto'} priority />
                        </Link>
                    </div>
                    <div className='navbar-nav ms-auto'>
                        <select style={{ width: '250px', border: 'none', background: 'transparent' }}>
                            <option>Pune</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                            <option>Goa</option>
                            <option>Nagpur</option>
                            <option>Indore</option>
                            <option>Chennai</option>
                            <option>Mumbai</option>
                        </select>
                    </div>
                    <div className='offers ms-5'>
                        <Image src={offer} /> <span>Offers</span>
                    </div>
                    <div className='call ms-5'>
                        <Image src={call} /> <span>Call</span>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className='resturent-deatils mt-5 mb-5'>
                <div className='container'>
                    <div className='rating float-end'>
                        <Image src={rating} height={35} width={45} />
                        <p>1k+ rating's</p>
                    </div>
                    <h4>Wow! Momo</h4>
                    <p>Tibetan, Healthy Food</p>
                    <p>3 kms | ₹43 Delivery fee will apply</p>
                    <div style={{ border: '1px dotted grey', marginTop: '55px' }}></div>
                </div>
            </div>

            {/* Veg non veg option */}

            <div className='veg-nonveg'>
                <div className='container'>
                    <div className='veg-nonveg'>
                        <h3>{item}</h3>
                        <button className='btn btn-outline-primary rounded-pill mt-3' onClick={handleToggle}>Click</button>
                    </div>
                    <div className='show-item'>
                        <div className='food m-5'>
                            {
                                data.map((item) => (
                                    <>
                                    <div className='food m-5' key={item.id}>
                                        <Image src={item.image} width={135} height={145} priority />
                                            <h4>{item.title}</h4>
                                            <p>{item.price}</p>
                                            <p>{item.text}</p>
                                        <div style={{ border: '1px dotted grey', marginTop: '55px' }}></div>
                                    </div>
                                    </>
                                  
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}

            <footer className='m-2 p-2 bg-light'>
                <div className='container'>
                    <div className='heading text-center fw-bold'>&copy; Project made by : Auroskkil</div>
                </div>
            </footer>

        </div>
    )
}

export default Resturent
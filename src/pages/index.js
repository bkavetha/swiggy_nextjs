import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Image from 'next/image';
import logo from '@/pages/images/swiglogo.png';
import offer from '@/pages/images/offer.svg';
import call from '@/pages/images/call.svg';
import chinese from '@/pages/images/chinese.webp';
import biryani from '@/pages/images/biryani.jpg';
import burger from '@/pages/images/burger.jpg';
import pizza from '@/pages/images/pizza.jpg';
import rolls from '@/pages/images/rolls.webp';
import rating from '@/pages/images/rating.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';


function index() {

  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/data')
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Swiggy Application</title>
      </Head>

      {/* Navbar */}

      <div className='navbar navbar-expand-lg bg-light mb-5 fixed-top'>
        <div className='container'>
          <div className='navbar-brand'>
            <Image src={logo} height={35} width={'auto'} priority />
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
            <form>
              <input className='form-control ms-5 w-75' value={search}
                onChange={(e) => { setSearch(e.target.value) }} placeholder='search...' />
            </form>
          </div>
          <div className='offers ms-5'>
            <Image src={offer} /> <span>Offers</span>
          </div>
          <div className='call ms-5'>
            <Image src={call} /> <span>Call</span>
          </div>
        </div>
      </div>

      {/* Food Menu */}

      <br />


      <section className='food-menu mt-5'>
        <div className='container'>
          <div className='food-head'>
            <h4>What's on your mind?</h4>
          </div>
          <div className='food-card'>
            <div className='row mt-5'>
              <div className='col'>
                <div className='card btn' style={{ width:'12rem', border: 'none' }}>
                  <Image className='card-img-top' src={chinese} width={150} style={{ background: 'none' }} /><br></br>
                  <h5>Chinese</h5>
                </div>
              </div>
              <div className='col'>
                <div className='card btn' style={{ width: '12rem', border: 'none' }}>
                  <Image className='card-img-top' src={biryani} width={150} height={190} style={{ background: 'none' }} /><br></br>
                  <h5>Biryani</h5>
                </div>
              </div>
              <div className='col'>
                <div className='card btn' style={{ width: '12rem', border: 'none' }}>
                  <Image className='card-img-top' src={burger} width={150} height={190} style={{ background: 'none' }} /><br></br>
                  <h5>Burger</h5>
                </div>
              </div>
              <div className='col'>
                <div className='card btn' style={{ width: '12rem', border: 'none' }}>
                  <Image className='card-img-top' src={rolls} width={150} height={190} style={{ background: 'none' }} /><br></br>
                  <h5>Rolls</h5>
                </div>
              </div>
              <div className='col'>
                <div className='card btn' style={{ width: '12rem', border: 'none' }}>
                  <Image className='card-img-top' src={pizza} width={150} height={190} style={{ background: 'none' }} /><br></br>
                  <h5>Pizza</h5>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </section>

      {/* Fecting Api data and showing */}

      <section className='Resturent-details'>
        <div className='container'>
          <div className='Resturent-heading'>
            <h3 className='text-center'>Restaurants with online food delivery in Pune</h3>
          </div>
          <div className='Resturent-details mt-5 mb-5'>
            <Row lg={5}>
              {
                data.filter((item) => {
                  if (search == '') {
                    return true;
                  }
                  else {
                    return search.toLowerCase() === '' ? data : item.title.toLowerCase().includes(search);
                  }
                }).map((item) => (
                  <Col>
                    <Link href={'/Resturent'} style={{ textDecoration: 'none', color: 'black' }}>
                      <div className={styles.card} style={{ width: '12rem', margin: '35px' }}>
                        <div className='card-img-top'>
                          <Image src={item.images} width={190} height={170} priority />
                        </div><br></br>
                        <div className='card-body text-center mb-2'>
                          <h6 className='card-text'>{item.title}</h6>
                          <p className='card-text'><span><Image src={rating} alt='rating' />&nbsp;{item.ratings}</span></p>
                          <p className='card-text'>{item.time}</p>
                          <p className='card-text'>{item.area}</p>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </section>
      <br />

      {/* Footer */}

      <footer className='m-2 p-2 bg-light'>
        <div className='container'>
          <div className='heading text-center fw-bold'>&copy; Project made by : Auroskkil</div>
        </div>
      </footer>

    </div>
  )
}

export default index
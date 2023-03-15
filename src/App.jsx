import { useEffect, useState } from 'react';

import Programmer from './assets/undraw.svg'
import Project from './Project';
import Arrow from './Arrow';
import Plane from './assets/paper-plane-solid.svg'

import GitHub from './assets/square-github.svg'
import Linkedin from './assets/linkedin.svg'
import Instagram from './assets/square-instagram.svg'

import Aos from 'aos';
import 'aos/dist/aos.css'

import { TypeAnimation } from 'react-type-animation';

import "./assets/fonts/JetBrainsMono-Bold.ttf"
import "./assets/fonts/JetBrainsMono-ExtraBold.ttf"
import "./assets/fonts/JetBrainsMono-Light.ttf"

export default function App() {

  function ScrollDown(where) {
    const height = window.innerHeight;
    window.scrollTo({
      top: height*where,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <main>
      
      <section style={{ margin: '0 auto' }} className='h-screen bg-back flex items-center justify-center'>
        
        <div style={{width: '80%'}} className='flex flex-row items-center justify-between bg-back'>

          <div className='w-[403px] flex flex-col'>
            <h1 style={{fontFamily: 'ExtraBold', lineHeight: '97%', fontSize: '6vw'}} className='select-none'>THIAGO DORVILLE</h1>
            <TypeAnimation
              sequence={[
                "I'm a web developer", 
                1000, 
                "I'm a front-end developer", 
                1000, 
                "I'm a programmer",
                1000,
                "I'm cs student",
                1000,
                () => {
                  console.log('Done typing!');
                }
              ]} wrapper="div" cursor={true} repeat={Infinity} className='mt-2 text-main select-none' style={{ fontFamily: 'Light', fontSize:'1.8vw', letterSpacing: '-0.135em' }}/>
              <a onClick={() => ScrollDown(1)} style={{ fontFamily: 'Bold',width: '20vw', height: '4vw', fontSize: '1.7vw', marginTop: '3.5vw'}}  className=' bg-lighter flex items-center justify-center cursor-pointer hover:bg-secondary transition-all hover:rounded-2xl active:scale-95 select-none'>PERSONAL PROJECTS</a>
            </div>

        <img src={Programmer} alt='' style={{width: '50vw', height: '50vw'}} className="select-none" />
        
        </div>

      </section>
      
      <section className='h-screen bg-back flex flex-col items-center justify-center'>
        
        <div style={{width: '80%'}}>

          <div>
            <h1 data-aos="fade-up" style={{fontFamily: 'ExtraBold', lineHeight: '97%', fontSize: '6vw'}} className='select-none'>PERSONAL PROJECTS</h1>
            <h2 data-aos="fade-up" style={{fontFamily: 'Light', fontSize: '2vw'}} className="select-none">Here you can check both code and deploy!</h2>
          </div>

          <div style={{gap: '3.5vw', marginTop: '3vw'}} className='flex flex-row'>
            <div data-aos="fade-left" data-aos-delay="">
              <Project />
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <Project />
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <Project />
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-offset="50" style={{width: '4vw'}}>
            <Arrow onClick={() => ScrollDown(2)} />
          </div>
          
        </div>

      </section>

      <section className='h-screen bg-back flex flex-col items-center justify-center'>
        
        <div style={{ width: '80%' }}>
          
            <div data-aos="fade-up" id="text-div">
              <h1 style={{fontFamily: 'ExtraBold', lineHeight: '97%', fontSize: '4vw'}} className='select-none'>DO YOU HAVE A COLLEGE DEGREE?</h1>
              <h2 className='select-none' style={{ fontSize: '1.2vw', marginTop: '1vw'}}>Yes! I'm a college student graduating in computer science in the university of UNIT/AL in <strong style={{fontFamily: 'ExtraBold'}} id="brazil">Brazil</strong></h2>
            </div>
            
            <div data-aos="fade-up" style={{marginTop: '3vw'}} id="text-div">
              <h1 className='select-none' style={{fontFamily: 'ExtraBold', lineHeight: '97%', fontSize: '4vw'}}>WHAT CAN YOU DO?</h1>  
              <h2 className='select-none' style={{fontSize: '1.2vw', marginTop: '1vw'}}>That's a good question!</h2>
              <h2 className='select-none' style={{ fontSize: '1.2vw', fontFamily: 'Light'}}>1. I've got experience in modern web component libraries such as <strong style={{fontFamily: 'ExtraBold'}} className='text-secondary'>Vue.js</strong> and <strong style={{fontFamily: 'ExtraBold', color: '#0085FF'}}>React</strong>;</h2>
              <h2 className='select-none' style={{ fontSize: '1.2vw' }}>2. I can use the latest styling stacks like SASS, <strong style={{fontFamily: 'ExtraBold', color:'#00F0FF'}}>Tailwind</strong> and Styled Components;</h2>
              <h2 className='select-none' style={{ fontSize: '1.2vw' }}>3. I'm used to coding responsively designed websites for <strong style={{fontFamily: 'ExtraBold', color:'#00FFDE'}}>Mobile</strong> and non usual screens;</h2>
              <h2 className='select-none' style={{ fontSize: '1.2vw' }}>4. I've done multiple projects pre-made component libraries like <strong style={{fontFamily: 'ExtraBold', color: '#0085FF'}}>MaterialUI</strong> and <strong style={{fontFamily: 'ExtraBold', color: '#AD00FF'}}>Bootstrap</strong>.</h2>
            </div>
            
            <div data-aos="fade-left" data-aos-offset="50" style={{width: '4vw'}}>
              <Arrow onClick={() => ScrollDown(3)} />
            </div>

        </div>

      </section>

      <section className='h-screen bg-back flex flex-col items-center justify-center'>
        
        <div className='flex flex-col' style={{ width: '80%' }}>
          
         <div className='flex flex-col'> 
            <h1 data-aos="fade-up" className='select-none' style={{fontFamily: 'ExtraBold',lineHeight: '97%', marginBottom: '0.3vw', fontSize: '4.5vw'}}>SEND A MESSAGE</h1>
            <input data-aos="fade-up" type='email' style={{width: '37.5vw', height: '3vw', fontSize: '1.3vw'}} className='bg-lighter pl-2 pr-2 focus:outline-none' placeholder='youremail@example.com' />
            <textarea data-aos="fade-up" style={{ marginTop: '1vw', width: '37.5vw', height: '10vw', fontSize: '1.3vw' }} className='resize-none bg-lighter p-2 focus:outline-none' placeholder='here you can type something nice!'></textarea>
            <button data-aos="fade-up" style={{ width: '7vw', height: '2.6vw', marginTop: '1vw' }} className='bg-lighter hover:bg-secondary transition-all flex flex-row items-center justify-center'>
              <p className='select-none' style={{fontFamily: 'ExtraBold', marginRight: '0.3vw', fontSize: '1.2vw'}}>SEND</p>
              <img className='select-none' style={{width: '1.4vw', height: '1.4vw', marginLeft: '0.2vw'}} src={Plane} />
            </button>
          </div>

          <div style={{marginTop: '2vw'}} className='flex flex-col'>
            <h1 data-aos="fade-top" className='select-none' style={{fontFamily: 'ExtraBold', lineHeight: '97%', fontSize: '4.5vw'}}>GET IN TOUCH</h1>
            <h2 data-aos="fade-top" className='select-none' style={{fontSize: '1.4vw'}}>You can find me on the socials below</h2>
            <div style={{marginTop: '1vw', gap:'1.3vw'}} className='flex'>
              <a target={'_blank'} href="https://github.com/DorvilleThiago" data-aos="fade-left" className='cursor-pointer'>
                <img className='select-none' src={GitHub} style={{width: '4vw', height: '4vw'}} />
              </a>
              <a target={'_blank'} href="https://www.linkedin.com/in/thiago-dorville/" data-aos="fade-left" className='cursor-pointer'>
                <img className='select-none' src={Linkedin} style={{width: '4vw', height: '4vw'}} />
              </a>
              <a target={'_blank'} href="https://www.instagram.com/thiagojosedorville/" data-aos="fade-left" className='cursor-pointer'>
                <img className='select-none' src={Instagram} style={{width: '4vw', height: '4vw'}} />
              </a>
            </div>
          </div>

        </div>

      </section>

      <footer style={{height: '7vh'}} className="bg-lighter flex items-center justify-center">
              <h2 className='select-none' style={{fontSize: '1.2vw'}}>@Copyright 2023 | All Rights Reserved</h2>
      </footer>

    </main>
  )
}
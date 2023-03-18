import { useEffect, useState } from 'react';

import Programmer from './assets/undraw.svg'
import Message from './assets/undraw_mobile_messages_re_yx8w.svg'
import Project from './Project';
import Arrow from './Arrow';

import Animefy from './assets/pj1.png'
import Dicionario from './assets/pj2.png'
import Dogs from './assets/pj3.png'

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';

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

  const [image, setImage] = useState(undefined);

  function showImage() {
    return (<img id='programador' src={Programmer} alt='programmer' className="select-none md:w-2/4" />)
  }

  useEffect(() => {
    setTimeout(setImage(showImage()),1000)
  }, [])

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
    <SkeletonTheme baseColor="#00BFA6" highlightColor="white">
    <main>
      
      <section style={{ margin: '0 auto', minHeight: '600px', height: '100dvh'}} className='bg-back flex items-center justify-center'>
        
        <div style={{width: '80%'}} className='flex flex-col-reverse md:flex-row items-center justify-between bg-back'>

          <div className='flex flex-col md:w-2/4 z-10'>
          
            <h1 style={{fontFamily: 'ExtraBold', lineHeight: '97%'}} className='md:w-1/4 select-none text-[52px] md:text-[50px] lg:text-[70px] text-center md:text-left xl:text-[80px] 2xl:text-[94px]'>THIAGO DORVILLE</h1>
            <TypeAnimation
              sequence={[
                "I'm a web developer", 
                1000, 
                "I'm a frontend developer", 
                1000, 
                "I'm a programmer",
                1000,
                "I'm a cs student",
                1000, 
              ]} wrapper="div" cursor={true} repeat={Infinity} className='text-main select-none text-[21px] md:text-[24px] lg:text-[26px] self-center md:self-auto xl:text-[30px]' style={{ fontFamily: 'Light', letterSpacing: '-0.135em' }}/>
              <a onClick={() => ScrollDown(1)} style={{ fontFamily: 'Bold'}}  className='mt-2 w-44 h-10 md:w-[210px] md:h-[50px] lg:w-[275px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 2xl:w-[325px] 2xl:h-[60px] self-center md:self-auto bg-lighter flex items-center justify-center cursor-pointer hover:bg-secondary transition-all hover:rounded-2xl active:scale-95 select-none 2xl:mt-14'>PERSONAL PROJECTS</a>
          </div>


            {image || <Skeleton count={5} heigh={200} width={100} />}

          
        </div>

      </section>
      
      <section style={{minHeight: '600px', height: '100dvh'}} className='bg-back flex flex-col items-center justify-center'>
        
        <div style={{width: '80%'}}>

          <div>
            <h1 data-aos="fade-up" style={{fontFamily: 'ExtraBold', lineHeight: '97%'}} className='select-none text-[25px] md:text-[58px] lg:text-[72px] xl:text-[80px] 2xl:text-[94px]'>PERSONAL PROJECTS</h1>
            <h2 data-aos="fade-up" style={{fontFamily: 'Light'}} className="select-none text-[14px] md:text-[24.5px] lg:text-[25px] leading-5 w-[250px] md:w-auto">Here you can check both code and deploy!</h2>
          </div>

          <div className='flex flex-col md:flex-row gap-3 md:gap-7 mt-8 md:mt-10'>
            <div data-aos="fade-up"  data-aos-delay="">
              <Project name="Spotify Clone" deploy="https://dorvillethiago.github.io/Animefy/" code="https://github.com/DorvilleThiago/Animefy"  src={Animefy} />
            </div>
            <div data-aos="fade-up" data-aos-delay="50">
              <Project name="Pt-Br Dictionary" deploy="https://dorvillethiago.github.io/Dicionario/" code="https://github.com/DorvilleThiago/Dicionario" src={Dicionario} />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <Project name="Landing page" deploy="https://dorvillethiago.github.io/dogs-page/" code="https://github.com/DorvilleThiago/dogs-page" src={Dogs} />
            </div>
          </div>
          
          <div className='mt-8 md:mt-10'>
            <Arrow onClick={() => ScrollDown(2)} />
          </div>
          
        </div>

      </section>

      <section style={{minHeight: '600px', height: '100dvh'}} className='bg-back flex flex-col items-center justify-center'>
        
        <div style={{ width: '80%' }}>
            <div id="text-div">
              <h1 data-aos="fade-up" className='select-none text-[25px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[80px]' style={{fontFamily: 'ExtraBold', lineHeight: '97%'}} >DO YOU HAVE A COLLEGE DEGREE?</h1>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>Yes! I'm a college student graduating in computer science in the university of UNIT/AL in <strong style={{fontFamily: 'ExtraBold'}} id="brazil">Brazil</strong></h2>
            </div>
            
            <div className='mt-6' id="text-div">
              <h1 data-aos="fade-up" className='select-none text-[25px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[80px]' style={{fontFamily: 'ExtraBold', lineHeight: '97%'}}>WHAT CAN YOU DO?</h1>  
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>That's a good question 👀</h2>
              <br/>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]' style={{fontFamily: 'Light'}}>1. I've got experience in modern web component libraries such as <strong style={{fontFamily: 'ExtraBold'}} className='text-secondary'>Vue.js</strong> and <strong style={{fontFamily: 'ExtraBold', color: '#0085FF'}}>React</strong>;</h2>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>2. I can use the latest styling stacks like SASS, <strong style={{fontFamily: 'ExtraBold', color:'#00F0FF'}}>Tailwind</strong> and Styled Components;</h2>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>3. I'm used to coding responsively designed websites for <strong style={{fontFamily: 'ExtraBold', color:'#00FFDE'}}>Mobile</strong> and non usual screens;</h2>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>4. I've done multiple projects with pre-made component libraries like <strong style={{fontFamily: 'ExtraBold', color: '#0085FF'}}>MaterialUI</strong> and <strong style={{fontFamily: 'ExtraBold', color: '#AD00FF'}}>Bootstrap</strong>.</h2>
            </div>
            
            <div className='mt-6'>
              <Arrow onClick={() => ScrollDown(3)} />
            </div>

        </div>

      </section>

      <section style={{minHeight: '600px', height: '100dvh'}} className='bg-back flex flex-col items-center justify-center'>

        <div className='flex flex-col' style={{ width: '80%' }}>
          
          <div className='flex flex-col md:flex-row md:justify-between'>

          <div className='flex flex-col'>
            <h1 data-aos="fade-up" className='select-none text-[35px] md:text-[35px] lg:text-[53px] xl:text-[55px] 2xl:text-[75px] md:max-w-[260px] lg:max-w-none' style={{fontFamily: 'ExtraBold', lineHeight: '97%'}}>GET IN TOUCH</h1>
            <h2 data-aos="fade-up" className='select-none text-[15px] md:text-[20px] lg:text-[23px] xl:text-[24px] max-w-[200px] md:max-w-[250px] xl:max-w-[320px] 2xl:max-w-none'>You can find me on the socials below</h2>
           
            <div className='flex mt-3 gap-3 xl:mt-36 md:mt-16 lg:mt-12'>
              <a target={'_blank'} href="https://github.com/DorvilleThiago" data-aos="fade-up" className='cursor-pointer'>
                <img className='select-none w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] hover:-translate-y-2 transition-all' src={GitHub}/>
              </a>
              <a target={'_blank'} href="https://www.linkedin.com/in/thiago-dorville/" data-aos="fade-up" data-aos-delay="50" className='cursor-pointer'>
                <img className='select-none w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] hover:-translate-y-2 transition-all' src={Linkedin}/>
              </a>
              <a target={'_blank'} href="https://www.instagram.com/thiagojosedorville/" data-aos="fade-up" data-aos-delay="100" className='cursor-pointer'>
                <img className='select-none w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] hover:-translate-y-2 transition-all' src={Instagram}/>
              </a>
            </div>
          </div>

              {<img data-aos="fade-up" className='mt-10 md:mt-0 max-w-[340px] max-h-[291px] md:max-w-[340px] md:max-h-[291px]  lg:max-w-[380px] lg:max-h-[331px] xl:max-w-[600px] xl:max-h-[551px]' src={Message} /> || <Skeleton count={5} heigh={200} width={100} />}

          </div>
          
          <div className='mt-10'>
            <Arrow Reversed={true} onClick={() => ScrollDown(0)} />
          </div>

        </div>

      </section>

      </main>
      </SkeletonTheme>
  )
}
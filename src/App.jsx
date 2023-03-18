import { useEffect, useState, useRef } from 'react';

import Programmer from './assets/undraw.svg'
import Message from './assets/undraw_mobile_messages_re_yx8w.svg'
import Project from './Project';
import Arrow from './Arrow';
import Lang from './assets/language-solid.svg'
import Text from './Text.jsx'

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

  function EngDesc() {
    return (
      <TypeAnimation
                sequence={[
                  ReturnTextEng(Text.desc_title),
                  1000, 
                  ReturnTextEng(Text.desc_title2), 
                  1000,
                  ReturnTextEng(Text.desc_title3),
                  1000,
                  ReturnTextEng(Text.desc_title4),
                  1000, 
                  ]} wrapper="div" cursor={true} repeat={Infinity} className='text-main select-none text-[21px] md:text-[24px] lg:text-[26px] self-center md:self-auto xl:text-[30px]' style={{ fontFamily: 'Light', letterSpacing: '-0.135em' }} />
        )
      }

  function PtDesc() {
    return (
      <TypeAnimation 
              sequence={[
                ReturnTextBr(Text.desc_title),
                1000, 
                ReturnTextBr(Text.desc_title2), 
                1000, 
                ReturnTextBr(Text.desc_title3),
                1000,
                ReturnTextBr(Text.desc_title4),
                1000, 
              ]} wrapper="div" cursor={true} repeat={Infinity} className='text-main select-none text-[21px] md:text-[24px] lg:text-[26px] self-center md:self-auto xl:text-[30px]' style={{fontFamily: 'Light', letterSpacing: '-0.135em'}}/>
        )
      }

  const typing = useRef(null);
  const [lang, setLang] = useState('en-us')

  function ScrollDown(where) {
    const height = window.innerHeight;
    window.scrollTo({
      top: height*where,
      behavior: 'smooth'
    })
  }

  function ReturnText(text) {
    if (lang == "en-us") { return text.eng } else if (lang == "pt-br") { return text.pt } 
  }

  function ReturnTextBr(text) {
    return text.pt 
  }

  function ReturnTextEng(text) {
    return text.eng
  }

  function ChangeLang() {
    if (lang == "en-us") { setLang('pt-br') } else if (lang == "pt-br") { setLang("en-us") } 
  }

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <SkeletonTheme baseColor="#00BFA6" highlightColor="white">
      <main>
      
        <button onClick={() => ChangeLang()} className='absolute bg-lighter top-5 left-5 flex flex-row items-center pl-3 pr-3 z-20 hover:bg-secondary transition-all'>
            <img src={Lang} className="w-15 h-10 text-white mr-3" alt='' />
            <p>{ReturnText(Text.lang)}</p>
        </button>
        
        <section style={{ margin: '0 auto', minHeight: '600px', height: '100dvh'}} className='bg-back flex items-center justify-center'>
          
          <div style={{width: '80%'}} className='flex flex-col-reverse md:flex-row items-center justify-between bg-back'>

            <div id='titulo' className='flex flex-col md:w-2/4 z-10 opacity-0' ref={typing}>
            
              <h1 style={{fontFamily: 'ExtraBold', lineHeight: '97%'}} className='md:w-1/4 select-none text-[52px] md:text-[50px] lg:text-[70px] text-center md:text-left xl:text-[80px] 2xl:text-[94px]'>THIAGO DORVILLE</h1>
                {lang == "pt-br" && PtDesc()}
                {lang == "en-us" && EngDesc()}
                <a onClick={() => ScrollDown(1)} style={{ fontFamily: 'Bold' }} className='mt-2 w-44 h-10 md:w-[210px] md:h-[50px] lg:w-[275px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 2xl:w-[325px] 2xl:h-[60px] self-center md:self-auto bg-lighter flex items-center justify-center cursor-pointer hover:bg-secondary transition-all hover:rounded-2xl active:scale-95 select-none 2xl:mt-14'>{ReturnText(Text.button)}</a>
            </div>

              
              {<img id='programador' src={Programmer} alt='programmer' className="select-none md:w-2/4" /> || <Skeleton count={4} heigh={200} width={100} />}

          </div>

        </section>
        
        <section style={{minHeight: '600px', height: '100dvh'}} className='bg-back flex flex-col items-center justify-center'>
          
          <div style={{width: '80%'}}>

            <div>
              <h1 data-aos="fade-up" style={{fontFamily: 'ExtraBold', lineHeight: '97%'}} className='select-none text-[25px] md:text-[58px] lg:text-[72px] xl:text-[80px] 2xl:text-[94px]'>{ReturnText(Text.title2)}</h1>
              <h2 data-aos="fade-up" style={{fontFamily: 'Light'}} className="select-none text-[14px] md:text-[24.5px] lg:text-[25px] leading-5 w-[250px] md:w-auto">{ReturnText(Text.desc2)}</h2>
            </div>

            <div className='flex flex-col md:flex-row gap-3 md:gap-7 mt-8 md:mt-10'>
              <div data-aos="fade-up"  data-aos-delay="" className='select-none'>
                <Project code_name={ReturnText(Text.link1)} deploy_name={ReturnText(Text.link2)} name="Spotify Clone" deploy="https://dorvillethiago.github.io/Animefy/" code="https://github.com/DorvilleThiago/Animefy"  src={Animefy} />
              </div>
              <div data-aos="fade-up" data-aos-delay="50" className='select-none'>
                <Project code_name={ReturnText(Text.link1)} deploy_name={ReturnText(Text.link2)} name="Pt-Br Dictionary" deploy="https://dorvillethiago.github.io/Dicionario/" code="https://github.com/DorvilleThiago/Dicionario" src={Dicionario} />
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className='select-none'>
                <Project code_name={ReturnText(Text.link1)} deploy_name={ReturnText(Text.link2)} name="Landing page" deploy="https://dorvillethiago.github.io/dogs-page/" code="https://github.com/DorvilleThiago/dogs-page" src={Dogs} />
              </div>
            </div>
            
            <div className='mt-8 md:mt-10'>
              <Arrow onClick={() => ScrollDown(2)} />
            </div>
            
          </div>

        </section>
        
          <section style={{ minHeight: '600px', height: '100dvh' }} className='bg-back flex flex-col items-center justify-center'>
            
          <div style={{ width: '80%' }}>

          <div id="text-div">
              <h1 data-aos="fade-up" className='select-none text-[25px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[80px]' style={{fontFamily: 'ExtraBold', lineHeight: '97%'}} >{ReturnText(Text.degree)}</h1>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>{ReturnText(Text.degree_desc)}</h2>
          </div>

          <div className='mt-6' id="text-div">
              <h1 data-aos="fade-up" className='select-none text-[25px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[80px]' style={{fontFamily: 'ExtraBold', lineHeight: '97%'}}>{ReturnText(Text.oq_sei)}</h1>  
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>{ReturnText(Text.oq_sei_desc)}</h2>
              <br className='select-none'/>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]' style={{fontFamily: 'Light'}}>{ReturnText(Text.oq_sei_desc2)}</h2>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>{ReturnText(Text.oq_sei_desc3)}</h2>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>{ReturnText(Text.oq_sei_desc4)}</h2>
              <h2 data-aos="fade-up" className='select-none text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]'>{ReturnText(Text.oq_sei_desc5)}</h2>
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
              <h1 data-aos="fade-up" className='select-none text-[35px] md:text-[35px] lg:text-[53px] xl:text-[55px] 2xl:text-[75px] md:max-w-[260px] lg:max-w-none' style={{fontFamily: 'ExtraBold', lineHeight: '97%'}}>{ReturnText(Text.contato)}</h1>
              <h2 data-aos="fade-up" className='select-none text-[15px] md:text-[20px] lg:text-[23px] xl:text-[24px] max-w-[200px] md:max-w-[250px] xl:max-w-[320px] 2xl:max-w-none'>{ReturnText(Text.social)}</h2>
            
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
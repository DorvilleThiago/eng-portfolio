import Programmer from './assets/undraw.svg'

export default function App() {
  return (
    <main>
      
      <section className='w-screen h-screen bg-back flex justify-between items-center pl-40 pr-40'>

        <div className='w-[403px] h-[309px]'>
          <h1 className='text-[96px] font-light'>THIAGO DORVILLE</h1>
          <h2 className='text-[30px]'>I am a web developer_</h2>
          <a className='bg-lighter w-[225px] h-[664px]'>PERSONAL PROJECTS</a>
        </div>

        <img src={Programmer} alt='' width={909} height={254} />

      </section>

    </main>
  )
}
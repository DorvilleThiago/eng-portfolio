import ArrowSvg from './assets/arrow.svg'

export default function Arrow(props) {

    return (
        <button onClick={props.onClick} className='w-[40px] h-[40px] xl:w-[55px] xl:h-[55px] cursor-pointer bg-lighter flex items-center justify-center hover:bg-secondary transition-all hover:rounded-xl select-none'>
            <img src={ArrowSvg}></img>
        </button>
    )
}
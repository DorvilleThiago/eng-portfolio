import ArrowSvg from './assets/arrow.svg'

export default function Arrow(props) {

    return (
        <button onClick={props.onClick} style={{width: '3vw', height: '3vw'}} className='cursor-pointer bg-lighter flex items-center justify-center mt-16 hover:bg-secondary transition-all hover:rounded-xl select-none'>
            <img style={{width: '1.5vw', height: '1.5vw'}} src={ArrowSvg}></img>
        </button>
    )
}
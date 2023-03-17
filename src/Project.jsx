import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';

export default function Project(props) {

    return (
        <div className="flex flex-row md:flex-col">
            <div>
                <div className="flex items-center justify-center z-10 text-transparent hover:text-white absolute bg-gradient-to-b from-secondary to-transparent opacity-70 hover:bg-lighter hover:opacity-100 transition-all w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72">
                    <h1 style={{fontFamily: 'ExtraBold'}} className="text-[13px] md:text-[16px] lg:text-[20px] xl:text-[25px] select-none">{props.name}</h1>
                </div>
                {<img id='project' src={props.src} className="transition-all w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 object-cover" /> || <Skeleton count={5} heigh={200} width={100} />}
            </div>
            <div className="flex flex-col ml-2 md:ml-0 md: md:mt-2 gap-3 md:flex-row">
                <a target={"_blank"} href={props.code} className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-3 md:px-2 p-1 bg-lighter flex items-center justify-center hover:bg-secondary transition-all  active:scale-95 select-none cursor-pointer">CODE</a>
                <a target={"_blank"} href={props.deploy} className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-3 md:px-2 p-1 bg-lighter flex items-center justify-center hover:bg-secondary transition-all  active:scale-95 select-none cursor-pointer">DEPLOY</a>
            </div>
        </div>
    )
}
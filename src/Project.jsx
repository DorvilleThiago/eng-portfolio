export default function Project() {
    return (
        <div className="flex flex-row md:flex-col">
            <div className="bg-gradient-to-br from-main to-back w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72" />
            <div className="flex flex-col ml-2 md:ml-0 md: md:mt-2 gap-3 md:flex-row">
                <a className=" text-lg lg:text-xl xl:text-2xl px-3 md:px-2 p-1 bg-lighter flex items-center justify-center hover:bg-secondary transition-all  active:scale-95 select-none cursor-pointer">CODE</a>
                <a className=" text-lg lg:text-xl xl:text-2xl px-3 md:px-2 p-1 bg-lighter flex items-center justify-center hover:bg-secondary transition-all  active:scale-95 select-none cursor-pointer">DEPLOY</a>
            </div>
        </div>
    )
}
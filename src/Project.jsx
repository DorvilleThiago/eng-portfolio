export default function Project() {
    return (
        <div>
            <div style={{width: '15vw', height: '15vw'}} className="bg-gradient-to-br from-main to-back" />
            <div className="flex mt-5">
                <a style={{width: '6vw', fontSize: '1.6vw'}} className=" bg-lighter flex items-center justify-center hover:bg-secondary transition-all  active:scale-95 select-none cursor-pointer">CODE</a>
                <a style={{width: '7.7vw', fontSize: '1.6vw'}} className=" bg-lighter flex items-center justify-center ml-5 hover:bg-secondary transition-all  active:scale-95 select-none cursor-pointer">DEPLOY</a>
            </div>
        </div>
    )
}
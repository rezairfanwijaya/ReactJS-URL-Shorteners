
function WhyCard(props) {
    return (
        <>
            <div className="faster bg-[#161B22] p-5 lg:py-10 lg:px-20 rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-[#1C2128] md:w-1/2" >
                <div className="logo">
                    <img src={props.img} alt='faster' className="w-20" />
                </div>
                <div className="header-faster text-[#D1D1D1] font-bold text-3xl">{props.title}</div>
                <div className="desc text-[#646464]  text-center text-lg">{props.desc}</div>
            </div>
        </>
    )
}

export default WhyCard;
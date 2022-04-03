import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <>
                <div className="cover-hero py-10 md:px-48 lg:px-48 ">
                    <div className="judul text-center ">
                        <p className="text-[#D1D1D1] text-5xl lg:text-7xl font-bold">Short links, Big Impact</p>
                    </div>
                    <div className="desc flex justify-center">
                        <p className="text-[#D1D1D1] mt-4 text-sm text-center  px-7">Create your short url now, and feel the magic. <span className="font-bold">The world in hand</span></p>
                    </div>
                </div>
            </>
        )
    }
}
export default Hero;


import React from "react";
import faster from "../../assets/images/faster.png";
import secure from "../../assets/images/secure.png";
import WhyCard from "../../card/WhyCard";

class Why extends React.Component {
    render() {
        return (
            <>
                <div className="cover-why p-5 md:px-20 lg:px-48 my-28">
                    <div className="cover-judul ">
                        <div className="judul text-[#D1D1D1] font-bold text-3xl">Why Use Url-Shorteners</div>
                    </div>

                    <div className="why-item mt-7 flex gap-5 flex-wrap md:flex-nowrap">
                        <WhyCard
                            img={faster}
                            title="Faster"
                            desc="We process the link quickly and present it to you."
                        />
                        
                        <WhyCard
                            img={secure}
                            title="Secure"
                            desc="Your link will be safe with us, we guarantee that."
                        />                        
                    </div>
                </div>
            </>
        )
    }
}

export default Why;
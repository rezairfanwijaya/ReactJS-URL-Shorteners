import React from "react";
import Logo from "../../assets/images/logo.png";
import Moon from "../../assets/images/moon.png";
import Sun from "../../assets/images/sun.png";
import Github from "../../assets/images/github.png";

class Navbar extends React.Component {

    render() {
        return (
            <>
                <div className="navbar bg-[#161B22]  ">
                    <div className="nav-item flex  justify-between p-5 md:px-20 lg:px-48">

                        <div className="logo kiri">
                            <a href="">
                                <img src={Logo} alt="logo" className="w-36" />
                            </a>
                        </div>

                        <div className="kanan github">
                            <a href="https://github.com/rezairfanwijaya/ReactJS-URL-Shorteners" target="_blank">
                                <img src={Github} alt="github" className="w-5" />
                            </a>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;
import React from "react";
import axios from "axios";
import success from "../../assets/images/success.png";
import copy from "../../assets/images/copy.png";

class Main extends React.Component {

    state = {
        // jika ada text
        isOpen: true,
        // link inputan user
        longLink: '',
        // link result
        shortLink: '',
        // jika berhasil generate shortlink
        isSucess: false
    }

    // function untuk mengetahui apa yang di input user
    inputHandler = (e) => {
        // ambil input user
        let urlUser = e.target.value;

        // jika inputan user kosong tombol akan disable
        // jika tidak maka link akan di generate
        if (urlUser == '') {
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false,
                longLink: urlUser
            })
        }
    }

    // function untuk generate short url
    crateShortUrl = () => {
        // ambil long url
        let longUrl = this.state.longLink;

        // panggil api
        axios.get('https://api.shrtco.de/v2/shorten', {
            params: {
                url: longUrl
            }
        }).then(res => {
            let shortLink = res.data.result.full_short_link;
            this.setState({
                shortLink: shortLink,
            })
        })

        this.setState({
            isSucess: true,
        })
    }



    render() {
        return (
            <>
                {/* input long url */}
                <div className="main py-7 flex flex-col px-10 gap-4 md:flex-row md:gap-3 md:justify-center md:px-20 lg:px-48">
                    <input type="text" placeholder="Long URL here" className="h-11 px-3 placeholder:text-[#8B8A8A] placeholder:text-sm rounded-md outline-none md:w-full" name="longLink" onChange={this.inputHandler} />

                    {/* jika isOpen adalah false maka button disable dan background pudar */}

                    {
                        this.state.isOpen
                            ?
                            <button className="bg-[#886CB6] rounded-md text-white p-2 font-semibold lg:w-56 cursor-not-allowed" disabled>Generate</button>
                            :
                            <button className="bg-[#6122CB] rounded-md text-white p-2 font-semibold lg:w-56 hover:bg-[#380886]" onClick={this.crateShortUrl}>Generate</button>
                    }
                </div>

                {/* jika shortlink berhasil dibuat maka tampilkan hasil */}
                {
                    this.state.isSucess
                        ?
                        <div className="success py-7 mt-5 px-10  md:px-20 lg:px-48">
                            <div className="result flex items-center gap-1">
                                <div className="text-[#D1D1D1] font-bold tracking-wider text-xl">Result</div>
                                <div className="icon-success">
                                    <img src={success} alt='succes' className="w-4" />
                                </div>
                            </div>

                            <div className="shorLink mt-2">
                                <div className="short-link-cover bg-white py-2 rounded-md px-3 border-2 border-[#EE6123] hover:border-[#DB4E10] relative">
                                    <span><a href={this.state.longLink} target="_blank" className="hover:underline">{this.state.shortLink}</a></span>
                                    <button className="copy-to-clipboard" onClick={this.copyToClipboard}>
                                        <div className="copy-link absolute top-0 -right-1 bg-[#EE6123] py-2 px-4 rounded-tr-md rounded-br-md lg:px-10 hover:bg-[#DB4E10]">
                                            <img src={copy} alt='copy' className="w-6 lg:w-6" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </>
        )
    }
}

export default Main;
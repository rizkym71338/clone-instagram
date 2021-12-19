import React from "react";
import ProfileCard from "../../components/molecules/cards/ProfileCard";
import Navbar from "../../components/organisms/Navbar";

import AlphaDev from "../../assets/img/alpha-dev.jpg"
import Saran from "../../components/organisms/Saran";

const Main = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="bg-gray-100 bg-opacity-50">
                <div className="max-w-5xl mx-auto md:px-10 grid grid-cols-3">
                    <div className="col-span-2">1</div>
                    <div className="md:flex flex-col hidden">
                        <div className="my-5">
                            <ProfileCard
                                img={AlphaDev}
                                username="alphadev.official"
                                name="Alpha Dev Official"
                            />
                        </div>
                        <div className="mb-5">
                            <Saran />
                        </div>
                        <div className="text-xs text-gray-300">
                            Tentang Bantuan Pers API Pekerjaan Privasi Ketentuan Lokasi Akun Teratas Tagar Bahasa
                            Bahasa Indonesia
                        </div>
                        <div className="text-xs text-gray-300 my-5">
                            &copy; 2021 INSTAGRAM FROM META
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;
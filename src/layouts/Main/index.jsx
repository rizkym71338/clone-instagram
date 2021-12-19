import React from "react";
import ProfileCard from "../../components/molecules/cards/ProfileCard";
import Navbar from "../../components/organisms/Navbar";

import AlphaDev from "../../assets/img/alpha-dev.jpg";
import Saran from "../../components/organisms/Saran";
import Story from "../../components/organisms/Story";
import Post from "../../components/organisms/Post";


const Main = () => {
    return (
        <>
            <div className="fixed z-50 top-0 w-full">
                <Navbar />
            </div>
            <div className="relative z-40 min-h-screen bg-gray-100 bg-opacity-50 pt-16">
                <div className="max-w-5xl mx-auto md:px-10 grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-2">
                        <div className="my-5">
                            <Story />
                        </div>
                        <div className="mr-5 mb-20">
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                        </div>
                    </div>
                    <div className="fixed -z-10 -translate-x-10 translate-y-5 max-w-5xl mx-auto md:px-10 grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2"></div>
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
            </div>
        </>
    )
};

export default Main;
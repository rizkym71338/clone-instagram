import React from "react";
import Search from "../../molecules/Search";

import Instagram from "../../../assets/img/instagram.png"
import AlphaDev from "../../../assets/img/alpha-dev.jpg"
import { Direct, Home, Like, NewPost, People } from "../../../assets/svg";

const Navbar = () => {

    return (
        <>
            <div className="bg-white border-b-2 py-3">
                <div className="max-w-5xl mx-auto md:px-10 flex flex-row justify-between md:grid md:grid-cols-3">
                    <div className="flex items-center">
                        <a href="/">
                            <img
                                src={Instagram}
                                alt="Instagram"
                            />
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <Search />
                    </div>
                    <div className="flex flex-row justify-end space-x-5 items-center">
                        <a href="#">
                            {Home}
                        </a>
                        <a href="#">
                            {Direct}
                        </a>
                        <a href="#">
                            {NewPost}
                        </a>
                        <a href="#">
                            {People}
                        </a>
                        <a href="#">
                            {Like}
                        </a>
                        <a href="#">
                            <img src={AlphaDev} alt="alpha-dev"
                                className="w-6 rounded-full border border-gray-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
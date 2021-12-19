import React from "react";
import SaranCard from "../../molecules/cards/SaranCard";

import AlphaDev from "../../../assets/img/alpha-dev.jpg"

const Saran = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mb-3">
                    <div className="text-sm font-semibold text-gray-400">
                        Saran Untuk Anda
                    </div>
                    <a href="#" className="text-xs font-semibold text-gray-700">
                        Lihat Semua
                    </a>
                </div>
                <div className="flex flex-col space-y-2">
                    <SaranCard
                        img={AlphaDev}
                    />
                    <SaranCard
                        img={AlphaDev}
                    />
                    <SaranCard
                        img={AlphaDev}
                    />
                    <SaranCard
                        img={AlphaDev}
                    />
                    <SaranCard
                        img={AlphaDev}
                    />
                </div>
            </div>
        </>
    )
};

export default Saran;
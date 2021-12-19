import React from "react";

const SaranCard = (props) => {
    return (
        <>
            <div className="flex flex-row space-x-3 items-center justify-between">
                <div className="flex flex-row items-center space-x-3">
                    <div>
                        <img
                            src={props.img}
                            alt={props.alt}
                            className="w-10 rounded-full border border-gray-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <a href="#" className="text-xs">
                            {props.username}
                        </a>
                        <div className="text-xs text-gray-400">
                            {props.name}
                        </div>
                    </div>
                </div>
                <a href="#" className="text-blue-400 text-xs font-semibold">
                    Ikuti
                </a>
            </div>
        </>
    )
};

SaranCard.defaultProps = {
    username: "Username",
    name: "Disarankan Untuk Anda",
    alt: "img"
}

export default SaranCard;
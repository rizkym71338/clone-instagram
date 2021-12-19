import React from "react";

const StoryCard = (props) => {
    return (
        <>
            <div className="flex flex-col justify-center space-y-1 items-center">
                <div className="flex items-center w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-orange-500 via-red-500 to-fuchsia-500">
                    <div className="w-12 h-12` mx-auto">
                        <img
                            src={props.img}
                            alt={props.alt}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="text-xs text-center text-gray-400">
                    {props.username}
                </div>
            </div>
        </>
    )
};

StoryCard.defaultProps = {
    alt: "img",
    username: "Username"
}

export default StoryCard;
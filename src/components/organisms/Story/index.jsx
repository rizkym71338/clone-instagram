import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import StoryCard from "../../molecules/cards/StoryCard";
import AlphaDev from "../../../assets/img/alpha-dev.jpg";
const Story = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <div className="bg-white mx-5 md:mx-0 md:mr-5 py-5 pl-3 rounded-sm border border-gray-300">
                <Carousel responsive={responsive}>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>

                </Carousel>
            </div>
        </>
    )
};

export default Story;
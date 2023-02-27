import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { BsArrowRightShort } from "react-icons/bs"

import "swiper/css";

function Roadmap({ viewType }) {
    const roadmapData = ["Q1-2023", "Q2-2023", "Q3-2023", "Q4-2023",]
    const roadmapDetails = [
        ["Private Sale", "Public Sale", "App beta v1", "Partnership with celbs"],
        ["Promotions", "App v2", "Staking & Farming"],
        ["Open Platform for Creators", "Music Studio v1"],
        ["Live Events Hosting", "preparing for Watch-to-earn"]
    ]
    return (
        <div className='roadmap-slider'>
            <Swiper
                className='roadmap-swiper'
                slidesPerView={4} //viewType === "mv" ? 2 : 4
                spaceBetween={0}
                initialSlide={0}>
                {
                    roadmapData.map((data, index) => {
                        return (
                            <SwiperSlide key={index} className="roadmap-slide">
                                <div>
                                    <div className='roadmap-title-ctn'>
                                        <div className='hr-line-roadmap'></div>
                                        <div className='roadmap-title-back'>
                                            <div className='roadmap-title'>
                                                <h3 className='font-24'>{data}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='roadmap-details'>
                                    {
                                        roadmapDetails[index].map((data, index) => {
                                            return (
                                                <div className='roadmap-txt-ctn mrgn-btm-05'>
                                                    <BsArrowRightShort size={35} className="arrow-roadmap" />
                                                    <h3 className='font-24'>{data}</h3>
                                                </div>


                                            )
                                        })
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default Roadmap
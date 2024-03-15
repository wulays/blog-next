'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards, Autoplay } from 'swiper/modules'
import {Image} from "@nextui-org/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import React from "react";

export default function Carousel() {

    const swiperList = [
        {
            img: 'https://www.loliapi.com/acg/',
            titel: '必应图片'
        },
        {
            img: 'https://api.boxmoe.com/random.php?size=mw1024',
            titel: '必应图片'
        },
        {
            img: 'https://www.loliapi.com/acg/pc/',
            titel: '必应图片'
        }
    ]

    return (
        <Swiper
            loop
            autoplay
            spaceBetween={50}
            effect={'cards'}
            grabCursor={true}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[EffectCards, Pagination, Autoplay]}
        >
            {
                swiperList.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image
                                className="h-[150px] md:h-[240px] lg:h-[360px] w-[1024px] object-cover"
                                alt={item.titel}
                                src={item.img}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

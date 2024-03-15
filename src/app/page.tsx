'use client';

import {Card, CardBody, ScrollShadow} from "@nextui-org/react";
import Carousel from "@/components/carousel";

export default function App() {

    return (
        <div className="max-w-[1024px] py-4 px-6 md:py-6 m-auto h-full">
            <Carousel />
            <Card className="my-4 md:my-6" isBlurred shadow="sm" radius="sm">
                <CardBody>
                    <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
            </Card>
        </div>
    )
}

import Link from "next/link";
import { Image } from "@nextui-org/react";
import {Button} from "@nextui-org/react";


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <Image
                width={500}
                height="100%"
                src="/assets/svg/not-found.svg"
                alt="Not Found"
            />
            <h2 className="text-xl font-semibold">页面未找到</h2>
            <p className="mb-4">无法找到所请求的资源 ~</p>
            <Link href="/" passHref>
                <Button color="primary" size="sm">返回主页</Button>
            </Link>
        </div>
    );
}

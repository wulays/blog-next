'use client'

import {
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Switch
} from "@nextui-org/react";
import Link from "next/link";
import {MoonIcon, SearchIcon, SunIcon} from "@nextui-org/shared-icons";
import {useState} from "react";

export default function MainNav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('')

    const menuList = [
        {
            title: '首页',
            href: '/'
        },
        {
            title: '归档',
            href: '/archives'
        },
        {
            title: '分类',
            href: '/category'
        },
        {
            title: '标签',
            href: '/tags'
        },
        {
            title: '关于',
            href: '/abouts'
        }
    ]

    return (
        <Navbar shouldHideOnScroll isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <Link href="/">
                        <p className="font-bold text-inherit">WULAYS</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="gap-3">
                    {
                        menuList.map(menu => {
                            return (
                                <NavbarItem className="hidden sm:list-item" key={menu.title}>
                                    <Link color="foreground" href={menu.href}>
                                        {menu.title}
                                    </Link>
                                </NavbarItem>
                            )
                        })
                    }
                    <NavbarItem className="hidden sm:list-item">
                        <Switch
                            onChange={ev => {
                                if (ev.target.checked) {
                                    document.documentElement.setAttribute('class', 'dark')
                                } else {
                                    document.documentElement.removeAttribute('class')
                                }
                            }}
                            checked={false}
                            color="warning"
                            thumbIcon={({ isSelected, className }) =>
                                isSelected ? (
                                    <MoonIcon className={className} />
                                ) : (
                                    <SunIcon className={className} />
                                )
                            }
                        >
                        </Switch>
                    </NavbarItem>
                    <NavbarItem>
                        <Input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            classNames={{
                                base: "max-w-full w-[12rem] h-10 ",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                            }}
                            placeholder="快速查找"
                            size="sm"
                            startContent={<SearchIcon/>}
                            type="search"
                        />
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuList.map((item) => (
                        <NavbarMenuItem key={item.title}>
                            <Link
                                className="w-full"
                                href={item.href}
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    )
}

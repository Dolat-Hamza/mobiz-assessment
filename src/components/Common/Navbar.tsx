"use client"; // For client components in Next.js 13

import React from "react";
import {motion} from "framer-motion";
import {MenuOutlined} from "@ant-design/icons";
import Logo from "@/components/Common/Logo";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {Avatar, Button} from "antd";
import {useRouter} from "next/navigation";

interface NavbarProps {
    onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({onMenuClick}) => {
    const logoVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {duration: 1}},
    };
    const {data: session, status} = useSession();
    const router = useRouter();
    const handleLogout = () => {
        signOut();
        router.push('/auth/login');
    }
    // const items: MenuProps['items'] = [
    //     {
    //         key: '1',
    //         label: (
    //
    //             <>
    //                 {status === 'authenticated' &&
    //                     <div className={"flex flex-row items-center gap-2"}>
    //                         <div><Avatar src={session?.user?.image} shape={"square"} size={"large"}/>
    //                             <span>{session?.user?.name}</span></div>
    //                     </div>
    //                 }
    //             </>
    //
    //
    //         ),
    //     },
    //     {
    //         key: '2',
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //                 2nd menu item (disabled)
    //             </a>
    //         ),
    //         icon: <SmileOutlined/>,
    //         disabled: true,
    //     },
    //     {
    //         key: '3',
    //         label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //                 3rd menu item (disabled)
    //             </a>
    //         ),
    //         disabled: true,
    //     },
    //     {
    //         key: '4',
    //         danger: true,
    //         label: 'a danger item',
    //     },
    // ];

    return (
        <motion.nav className="bg-white p-4 shadow-md sticky top-0 z-20">
            <div className="container mx-auto flex items-center justify-between"> {/* Use flexbox for layout */}
                {/* Menu Button */}
                <MenuOutlined
                    onClick={onMenuClick}
                    className="md:hidden text-gray-800 hover:text-blue-500 cursor-pointer"
                />

                {/* Logo */}
                <motion.div variants={logoVariants} initial="initial" animate="animate"
                            className="flex-1 flex justify-center"> {/* Center the logo */}
                    <Logo src="/images/logo.png"/>
                </motion.div>

                {/* Navigation Links (hidden on mobile) */}
                <div className="hidden md:flex flex-row gap-4 items-center ">
                    <Link href="#" className="text-gray-800 hover:text-blue-500">Home</Link>
                    <Link href="#" className="text-gray-800 hover:text-blue-500">About</Link>
                    {status === 'authenticated' &&
                        <div className={"flex flex-row gap-4 items-center"}>
                            <Link href="/dashboard" className="text-gray-800 hover:text-blue-500">Dashboard</Link>

                            {status === 'authenticated' &&
                                <div className={"flex flex-row items-center gap-2"}>

                                    <Avatar src={session?.user?.image} shape={"square"} size={"large"}/>
                                    <motion.p animate={
                                        {
                                            opacity: 1,
                                            y: 0,
                                            transition: {duration: 0.5, delay: 0.2},
                                        }

                                    } whileHover={
                                        {
                                            scale: 1.1
                                        }
                                    } className={"text-xs cursor-pointer "}>{session?.user?.name}</motion.p>
                                </div>
                            }


                            <Button onClick={handleLogout} className="text-gray-800 hover:text-blue-500">Logout</Button>
                        </div>
                    }

                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

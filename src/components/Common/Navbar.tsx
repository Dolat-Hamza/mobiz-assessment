"use client"; // For client components in Next.js 13

import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "@/components/Common/Logo";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {Avatar, Button, Drawer, Dropdown, Menu} from "antd";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import ThemeSwitch from "@/components/Common/ThemeSwitch";

interface NavbarProps {
    onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
    const logoVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
    };
    const { data: session, status } = useSession();

    const router = useRouter();
    const { theme } = useTheme(); // Get the current theme from context



    useEffect(() => {
        const body = document.body;
        body.classList.remove("light", "dark");
        body.classList.add(theme);
    }, [theme]);

    const navLinkVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const menuItems = [
        {
            label: <Link href="/">Home</Link>,
            key: "home",
        }, {
            label: <Link href="/dashboard">Dashboard</Link>,
            key: "dashboard",
        },
        session?.user.role === "admin" &&  {
            label: <Link href="/users">Users</Link>,
            key: "users",
        },
        {
            label: <Link href="/users/create">Create User</Link>,
            key: "create-user",
        },
    ].filter((item): item is { label: JSX.Element; key: string } => Boolean(item)); // Filter out false values and ensure the type

    console.log("HERE IS THE NEW SESSIOn",session)
    const handleLogout = () => {
        signOut();
        router.push("/auth/login");
    };

    const [visibleDrawer, setVisibleDrawer] = useState(false);

    const showDrawer = () => {
        setVisibleDrawer(true);
    };

    const onClose = () => {
        setVisibleDrawer(false);
    };

    return (
        <motion.nav
            className={`bg-${theme === "light" ? "white" : "gray-800"
            } p-4 shadow-md sticky top-0 z-20 transition-colors duration-300`}
        >
            <div className="flex-row w-full mx-auto flex gap-4 items-center justify-between">
                {/* Menu Button for smaller screens */}
                <MenuOutlined
                    onClick={showDrawer}
                    className="md:hidden text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer text-xl"
                />

                {/* Logo (Animated with Framer Motion) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                >
                    <Link href="/">
                        <Logo src="/images/logo.png" />
                    </Link>
                </motion.div>

                {/* Navigation Links (Desktop) and User/Theme Controls */}
                <div className="flex-grow md:flex flex-row gap-4 items-center  w-full justify-end">
                    {/* Navigation Links (Hidden on mobile) */}
                    <div className="hidden md:flex flex-row gap-4 items-center">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.key}
                                variants={navLinkVariants}
                                initial="initial"
                                animate="animate"
                            >
                                <Link
                                    href={item.key === "home" ? "/" : item.key}
                                    className={`text-${
                                        theme === "light" ? "gray-800" : "gray-200"
                                    } hover:text-blue-500`}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Theme Switch (Hidden on mobile) */}
                    <div className="hidden md:block">
                        <ThemeSwitch />
                    </div>

                    {/* User Profile (Only shown on desktop) */}
                    {status === "authenticated" && (
                        <div className="flex flex-row gap-4 items-center justify-end">

                            <Avatar src={session?.user?.image} shape="square" size="large" />
                            <motion.p
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: 0.2 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                className="text-xs cursor-pointer"
                            >
                                {session?.user?.name}
                            </motion.p>
                            <Button onClick={handleLogout} className={`text-${
                                theme === "light" ? "gray-800" : "gray-200"
                            } hover:text-blue-500`}>Logout</Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Drawer for Mobile Navigation */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                visible={visibleDrawer}
            >
                <Menu items={menuItems} />
                {/* Include ThemeSwitch and user profile for mobile */}
                <div className={"flex flex-row gap-4 items-center justify-between"}>
                <ThemeSwitch />
                {status === "authenticated" && (
                    <div className="flex flex-row gap-4 items-center">
                        <Avatar src={session?.user?.image} shape="square" size="large" />
                        <p className="text-xs">{session?.user?.name}</p>
                        <Button onClick={handleLogout} className={`text-${
                            theme === "light" ? "gray-800" : "gray-200"
                        } hover:text-blue-500`}>Logout</Button>
                    </div>
                )}
                </div>
            </Drawer>
        </motion.nav>
    );
};

export default Navbar;


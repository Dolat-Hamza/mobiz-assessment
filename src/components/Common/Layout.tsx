"use client" // For client components in Next.js 13

import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const contentVariants = {
        sidebarOpen: { marginLeft: 250 }, // Adjust to match sidebar width
        sidebarClosed: { marginLeft: 0 },
    };

    return (
        <div className={"flex flex-row items-start justify-between w-full h-screen"}>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
            <motion.div
                className="flex-1 overflow-y-auto"
                variants={contentVariants}
                animate={isSidebarOpen ? "sidebarOpen" : "sidebarClosed"}
                transition={{type: "tween", duration: 0.3}}
            >
                <Navbar onMenuClick={toggleSidebar}/> {/* Render the Navbar */}
                <main className="">
                    {children}
                </main>
                <Footer/>
            </motion.div>

        </div>
    );
};

export default Layout;

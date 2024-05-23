"use client"; // For client components in Next.js 13

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const sidebarVariants = {
        open: {
            width: 250,
            transition: {
                type: "tween",
                duration: 0.3,
            },
        },
        closed: {
            width: 0,
            transition: {
                type: "tween",
                duration: 0.3,
                delay: 0.1, // Slight delay for smoother close
            },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="bg-gray-800 h-screen fixed top-0 left-0 z-10 overflow-y-auto shadow-md"
                    variants={sidebarVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    {/* Your sidebar content here */}
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    {/* ... navigation links, etc. */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;

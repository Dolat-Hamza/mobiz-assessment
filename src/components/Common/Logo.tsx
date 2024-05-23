import React from "react";
import { motion } from "framer-motion";
import { Typography } from "antd";
import Image from "next/image";

const { Title } = Typography;

interface LogoProps {
    src: string;
    text?: string;
}

const Logo: React.FC<LogoProps> = ({ src, text }) => {
    const logoVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 1 } }, // Smooth entrance
        hover: { scale: 1.1 }, // Scale up on hover
    };

    const textVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }, // Delayed text appearance
        // hover: { textShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)" }, // Add text shadow on hover
    };

    return (
        <motion.div
            className="flex flex-col gap-6 items-center space-x-2 cursor-pointer"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
        >
            <motion.div>
                <Image
                    src={src}
                    alt="Logo"
                    width={100}
                    height={100}
                />
            </motion.div>
            {text && (
                <motion.div variants={textVariants}>
                    <Title level={4} className="font-bold text-gray-800">
                        {text}
                    </Title>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Logo;

import {signIn} from 'next-auth/react';
import {Button} from "antd";
import {GoogleOutlined} from "@ant-design/icons";
import Logo from "@/components/Common/Logo";
import {motion} from 'framer-motion';

export default function Login() {
    const backgroundVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {duration: 1},},
        exit: {opacity: 0, transition: {duration: 0.5}},

    };

    const buttonVariants = {
        hover: {scale: 1.05},
        tap: {scale: 0.95},
    };

    return (
        <motion.div
            className={"flex flex-row items-center justify-between w-full h-screen"}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.5}}}
        >
            <title>Mobiz Assessment || Login Page</title>

            <motion.div
                className={"w-full bg-software-bg bg-cover rounded-r-2xl shadow-2xl drop-shadow-2xl h-full flex flex-col items-center justify-center bg-no-repeat text-transparent from-indigo-500 via-purple-500 to-pink-500"}
                variants={backgroundVariants}
            />

            <motion.div
                className={"flex flex-col items-center justify-center w-full h-full gap-6"}
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1, transition: {delay: 0.3, duration: 0.8}}}
            >
                <Logo src={"/images/logo.png"} text={"Log in to your account"}/>
                <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Button
                        icon={<GoogleOutlined/>}
                        type="primary"
                        onClick={() => signIn('google')}
                    >
                        Login with Google
                    </Button>
                </motion.div>
            </motion.div>

        </motion.div>
    );
}

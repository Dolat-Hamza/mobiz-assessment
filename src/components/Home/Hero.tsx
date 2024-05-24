import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <div className="bg-software-bg bg-contain w-full justify-center  bg-center h-screen flex items-center">

            <div className="flex flex-col items-center justify-center w-4/5 rounded-2xl p-8   bg-black  text-center">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0, transition: {duration: 0.8}}}
                    className="text-5xl md:text-6xl font-extrabold text-white mb-4"
                >
                    Elevate Your Business with Our Products
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0, transition: {delay: 0.3, duration: 0.8}}}
                    className="text-xl md:text-2xl text-white opacity-80 mb-8"
                >
                    We offer innovative solutions to boost your efficiency and productivity.
                </motion.p>

                <motion.button
                    whileHover={{scale: 1.1}}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full"
                >
                    Explore Now
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;

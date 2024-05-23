import { motion } from 'framer-motion';

const CallToAction = () => {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Add a slight delay between characters
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-12 text-white">
            <div className="container mx-auto text-center">
                <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                >
                    {Array.from("Ready to get started?").map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-8 rounded-full"
                >
                    Contact Us
                </motion.button>
            </div>
        </section>
    );
};

export default CallToAction;

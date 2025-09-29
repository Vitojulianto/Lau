import { motion } from "framer-motion";

export default function LoveMessage({ name }) {
    return (
        <div className="flex flex-col items-center mt-10">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-red-500 text-9xl"
            >
                ❤️
            </motion.div>

            <motion.h2
                className="text-2xl font-bold mt-4 text-pink-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Por yuu, {name} ❤️
            </motion.h2>

            <p className="mt-2 text-gray-700">
                Semoga senyum ya pas lihat ini! 😘
            </p>
        </div>
    );
}

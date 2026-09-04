import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FadeIn = ({ children, className = "", delay = 0 }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;

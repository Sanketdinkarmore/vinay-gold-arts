"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
    children: React.ReactNode
    delay?: number
    y?: number
    once?: boolean
    desktopOnly?: boolean
    className?: string
}

export function Reveal({ children, delay = 0, y = 16, once = true, desktopOnly = false, className }: RevealProps) {
    const prefersReducedMotion = useReducedMotion();

    // Disable on mobile if desktopOnly
    const isDesktop = typeof window === "undefined" ? true : window.matchMedia("(min-width: 1024px)").matches;
    const shouldAnimate = prefersReducedMotion ? false : (desktopOnly ? isDesktop : true);

    if (!shouldAnimate) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
            viewport={{ once, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
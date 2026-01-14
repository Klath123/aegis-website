import { motion, useInView } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string;
    speed?: number;
    maxIterations?: number;
    characters?: string;
    revealDirection?: 'start' | 'end' | 'center';
    animateOn?: 'view' | 'hover';
    encryptedClassName?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    characters = CHARS,
    revealDirection = 'start',
    animateOn = 'view',
    className = '',
    encryptedClassName = '',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const iterations = useRef(0);
    const intervalRef = useRef<number>();

    const shouldAnimate = animateOn === 'hover' ? isHovered : isInView;

    useEffect(() => {
        if (!shouldAnimate) return;

        iterations.current = 0;

        const interval = setInterval(() => {
            setDisplayText((current) => {
                return current
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';

                        const progress = iterations.current / maxIterations;
                        let revealIndex: number;

                        if (revealDirection === 'start') {
                            revealIndex = Math.floor(progress * text.length);
                            if (index < revealIndex) return text[index];
                        } else if (revealDirection === 'end') {
                            revealIndex = Math.floor((1 - progress) * text.length);
                            if (index >= revealIndex) return text[index];
                        } else {
                            const center = Math.floor(text.length / 2);
                            const spread = Math.floor((progress * text.length) / 2);
                            if (Math.abs(index - center) <= spread) return text[index];
                        }

                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('');
            });

            iterations.current += 1;

            if (iterations.current > maxIterations) {
                setDisplayText(text);
                clearInterval(interval);
            }
        }, speed);

        intervalRef.current = interval;

        return () => {
            if (intervalRef.current !== undefined) {
                clearInterval(intervalRef.current);
            }
        };
    }, [shouldAnimate, text, speed, maxIterations, characters, revealDirection]);

    return (
        <motion.span
            ref={ref}
            className={iterations.current > maxIterations ? className : encryptedClassName || className}
            onMouseEnter={animateOn === 'hover' ? () => setIsHovered(true) : undefined}
            onMouseLeave={animateOn === 'hover' ? () => setIsHovered(false) : undefined}
            {...props}
        >
            {displayText}
        </motion.span>
    );
}

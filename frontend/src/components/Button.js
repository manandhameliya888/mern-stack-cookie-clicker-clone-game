import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#ffcc00' }}
            whileTap={{ scale: 0.9, backgroundColor: '#ff9900' }}
            onClick={onClick}
            style={{
                padding: '10px 20px',
                fontSize: '18px',
                borderRadius: '10px',
                border: 'none',
                background: '#ffd700',
                color: '#fff',
                cursor: 'pointer',
            }}
        >
            Click Me!
        </motion.button>
    );
};

export default Button;

import React from 'react';
import { motion } from 'framer-motion';

const Notification = ({ message }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
            backgroundColor: '#ffcccb',
            color: '#333',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '16px',
        }}
    >
        {message}
    </motion.div>
);

export default Notification;

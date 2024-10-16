import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { API_URL } from '../../config';

const TelegramLogin: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();

        const userData = tg.initDataUnsafe.user;

        if (userData) {
            fetch(`/${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ auth_data: tg.initData })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Error during login', error);
            });
        }
    }, [navigate]);

    return null

};

export default TelegramLogin;

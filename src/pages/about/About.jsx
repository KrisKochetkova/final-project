import React, { useState } from 'react';
import MyModal from '../../components/my modal/MyModal';

const About = () => {
    const [modal, setModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleOpenModal = () => {
        console.log("Opening modal");
        setModal(true);
    };

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
        console.log("Toggled visibility to:", !isVisible); // Показываем новое состояние
    };

    return (
        <div>
            <h1>to be continued...</h1>
            <button onClick={handleOpenModal}>open</button>
            <MyModal visible={modal} setVisible={setModal}>
                <h3>Тестовое сообщение</h3>
                <button onClick={toggleVisibility}>
                    {isVisible ? "Скрыть" : "Показать"} сообщение
                </button>
                {isVisible && <p>Это скрытое сообщение, которое показывается при нажатии кнопки.</p>}
                <button onClick={() => setModal(false)}>Закрыть</button>
            </MyModal>
            {/* Отображение состояния для отладки */}
            <p>Текущее состояние isVisible: {isVisible ? "Видимо" : "Скрыто"}</p>
        </div>
    );
};

export default About;
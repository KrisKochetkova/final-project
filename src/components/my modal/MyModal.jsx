import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.myModal];
    if(visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

// const MyModal = ({ children, visible, setVisible }) => {
//     const rootClasses = [classes.myModal];
    
//     // Если модальное окно не активно, не рендерим его
//     if (!visible) return null;

//     return (
//         <div
//             className={rootClasses.join(' ')}
//             onClick={() => {
//                 console.log("Modal background clicked"); // Логируем клик по фону
//                 setVisible(false);
//             }}
//         >
//             <div
//                 className={classes.myModalContent}
//                 onClick={(e) => {
//                     e.stopPropagation(); // Останавливаем всплытие события
//                     console.log("Modal content clicked"); // Логируем клик по контенту
//                 }}
//             >
//                 {children}
//             </div>
//         </div>
//     );
// };


export default MyModal;
import React, {useState} from 'react';
import classes from "./Login.module.css";
import Mybutton from "../../components/UI/button/Mybutton"
import MyModal from '../../components/my modal/MyModal';
import Myinput from '../../components/UI/input/Myinput';


const Login = () => {
    const [modal, setModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    function handleClick(e) {
        e.preventDefault();
        setIsVisible(!isVisible);
 }
    return (
        <div className={classes.container}>
             <div className={classes.loginImage}>
          <div className={classes.topGroup}>
                <div className={classes.leftCircle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M23.2906 11.9005C23.2906 17.7423 18.4023 22.5317 12.305 22.5317C6.20764 22.5317 1.31935 17.7423 1.31935 11.9005C1.31935 6.05869 6.20764 1.26923 12.305 1.26923C18.4023 1.26923 23.2906 6.05869 23.2906 11.9005Z" stroke="#F1E9FE" stroke-width="2.12625"/>
                    </svg>
                </div>
                <div className="right__semi-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="101" viewBox="0 0 51 101" fill="none">
                        <mask id="path-1-inside-1_201_2378" fill="white">
                        <path d="M50.4081 100.1C43.8464 100.1 37.3489 98.8077 31.2867 96.2966C25.2244 93.7856 19.7161 90.105 15.0762 85.4652C10.4364 80.8253 6.75585 75.317 4.24478 69.2547C1.73371 63.1925 0.441274 56.695 0.441274 50.1333C0.441275 43.5715 1.73371 37.074 4.24478 31.0118C6.75585 24.9495 10.4364 19.4412 15.0762 14.8013C19.7161 10.1615 25.2244 6.48095 31.2867 3.96988C37.3489 1.45881 43.8464 0.166379 50.4082 0.16638L50.4082 50.1333L50.4081 100.1Z"/>
                        </mask>
                        <path d="M50.4081 100.1C43.8464 100.1 37.3489 98.8077 31.2867 96.2966C25.2244 93.7856 19.7161 90.105 15.0762 85.4652C10.4364 80.8253 6.75585 75.317 4.24478 69.2547C1.73371 63.1925 0.441274 56.695 0.441274 50.1333C0.441275 43.5715 1.73371 37.074 4.24478 31.0118C6.75585 24.9495 10.4364 19.4412 15.0762 14.8013C19.7161 10.1615 25.2244 6.48095 31.2867 3.96988C37.3489 1.45881 43.8464 0.166379 50.4082 0.16638L50.4082 50.1333L50.4081 100.1Z" stroke="#F1E9FE" stroke-width="4.2525" mask="url(#path-1-inside-1_201_2378)"/>
                    </svg>
                </div>
          </div>
          <div className={classes.bottomGroup}>
                <div className="left__semi-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="181" viewBox="0 0 91 181" fill="none">
                        <mask id="path-1-inside-1_201_2376" fill="white">
                        <path d="M0.461326 0.692318C12.2818 0.692317 23.9865 3.02053 34.9071 7.54402C45.8278 12.0675 55.7506 18.6977 64.1089 27.056C72.4672 35.4143 79.0974 45.3371 83.6209 56.2578C88.1444 67.1784 90.4726 78.8831 90.4726 90.7036C90.4726 102.524 88.1444 114.229 83.6209 125.149C79.0974 136.07 72.4672 145.993 64.1089 154.351C55.7506 162.709 45.8278 169.34 34.9071 173.863C23.9865 178.387 12.2818 180.715 0.461327 180.715L0.46133 90.7036L0.461326 0.692318Z"/>
                        </mask>
                        <path d="M0.461326 0.692318C12.2818 0.692317 23.9865 3.02053 34.9071 7.54402C45.8278 12.0675 55.7506 18.6977 64.1089 27.056C72.4672 35.4143 79.0974 45.3371 83.6209 56.2578C88.1444 67.1784 90.4726 78.8831 90.4726 90.7036C90.4726 102.524 88.1444 114.229 83.6209 125.149C79.0974 136.07 72.4672 145.993 64.1089 154.351C55.7506 162.709 45.8278 169.34 34.9071 173.863C23.9865 178.387 12.2818 180.715 0.461327 180.715L0.46133 90.7036L0.461326 0.692318Z" stroke="#F1E9FE" stroke-width="4.2525" mask="url(#path-1-inside-1_201_2376)"/>
                    </svg>
                </div>
                <div className="right__circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
                        <path d="M39.0995 21.8068C39.0995 32.8198 30.6389 41.6518 20.3176 41.6518C9.99623 41.6518 1.5357 32.8198 1.5357 21.8068C1.5357 10.7937 9.99623 1.96178 20.3176 1.96178C30.6389 1.96178 39.0995 10.7937 39.0995 21.8068Z" stroke="#F1E9FE" stroke-width="2.12625"/>
                        </svg>
                </div>
          </div>
        </div>
        <div className={classes.text}>
            <p className={`${classes.titleText} ${classes.position}`}>
                Do your task <br />Don’t just list them
            </p>
        </div>
            <div className={`${classes.logIn} ${classes.position}`}>
             <button onClick={()=> setModal(true)} className={classes.logInBtn}>
            Dive In
            </button>
            <MyModal visible={modal} setVisible={setModal}>              
                 <Myinput
                    type="email"
                    placeholder="email@email.com"
                />
                 <Myinput
                    type="password"
                    placeholder="pasword"
                 />
                 <Mybutton
                 type="submit"
                onClick = {handleClick}
                 >Submit</Mybutton>
            </MyModal>
             </div>
            

    </div>
    
    )
};

export default Login;


{/* <NewTaskbtn onClick={()=> setModal(true)}/>
<MyModal visible={modal} setVisible={setModal}> 
    <TaskForm create={createTask}/>
</MyModal> */}
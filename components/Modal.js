import {motion} from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/image";
import styles from '../styles/Modal.module.css'

const Modal = ({ handleClose, setImg, img, text, width, height, orient, white}) => {
    const dropIn = {
        hidden: {
            opacity: 0,
            width: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            width: width,
            height: height,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 50,
                stiffness: 500,

            }
        },
        exit: {
            y: "100vh",
            opacity: 0, 
        }

    }

    const h = orient === 2 ? height : width 
    const w = orient === 2 ? h *.667 : width
    const path = white === true ? `/photos/white/${img}.jpg` : `/photos/gold/${img}.jpg`
    const len = white === true ? 15 : 6
    console.log(path)
    
 
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                      
                onClick={(e) => e.stopPropagation()}
                className = {styles.modal}
                variants = {dropIn}
                initial = "hidden"
                animate = "visible"
                exit = "exit"
            >
                <Image objectFit="contain" width={w} height={h} src={path} alt="Teo and Yuriko are in love" />
                <h1>{text}</h1>
                <button className={styles.close} onClick={handleClose}>X</button>
                <button className={styles.prev} onClick={() => img-1 > 0 ? setImg(img-1) : setImg(len)}>&lArr;</button>
                <button className={styles.next} onClick={() => img+1 < len+1 ? setImg(img+1) : setImg(1)}>&rArr;</button>
            </motion.div>
            
        </Backdrop>
    )
};

export default Modal;
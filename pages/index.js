import {motion, AnimatePresence } from 'framer-motion';
import {useState, useRef, useEffect} from 'react';
import Modal from '../components/Modal'
import styles from '../styles/Home.module.css'  
import Image from 'next/image';

function App() {
  const [modalOpen, setModalOpen] = useState(true)

  const [img, setImg] = useState('/photos/white/4.jpg') 
  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(667)
  const [orient, setOrient] = useState(1)


  const close = () => {
    setModalOpen(false)
    setImg("")  
  };
  const open = () => setModalOpen(true);
  
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carousel2Width, setCarousel2Width] = useState(0);
  const carousel1 = useRef();
  const carousel2 = useRef();
  const main =useRef()

  useEffect(() => {
    setWidth(main.current.scrollWidth*.9)
    setHeight(main.current.scrollHeight*.9)
    setCarouselWidth(carousel1.current.scrollWidth- carousel1.current.offsetWidth)
    setCarousel2Width(carousel2.current.scrollWidth- carousel2.current.offsetWidth)
  }, [])

  useEffect(() => {
    if (img !== "")
    setModalOpen(true)
  }, [img])

  function getModal(i, or) {
    setOrient(or)
    
    setImg(i)
    
  }

  
  return (
    <div ref={main} className={styles.main}>
        <h1 className={styles.toptitle}>Teo Peralez and Yuriko Ara</h1>
        <h2 className={styles.subtitle}>Married July 12, 2021 - Photographed February 7, 2022</h2>
        
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h1 className={styles.title}>White Kimono and Black Hakama</h1>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}transition={{duration: 0.5}} ref={carousel1} drag="x" dragConstraints={{right:0, left:-carouselWidth- 36}} className={styles.wrapper}>
            
              <motion.div className={styles.carousel}>
              <div layoutId="/photos/white/1.jpg" className={styles.card} onClick={() => getModal("/photos/white/1.jpg", 1)}>
                  <Image src="/photos/white/1.jpg" width={200} height={133} alt="white 1"/> 
                </div>
                <div layoutId="/photos/white/2.jpg" className={styles.card} onClick={() => getModal("/photos/white/2.jpg", 1)}>
                  <Image src="/photos/white/2.jpg" width={200} height={133} alt="white 2"/> 
                </div>
                <div layoutId="/photos/white/3.jpg" className={styles.card} onClick={() => getModal("/photos/white/3.jpg", 2)}>
                  <Image src="/photos/white/3.jpg" width={133} height={200} alt="white 3"/>
                </div>
                <div layoutId="/photos/white/4.jpg" className={styles.card} onClick={() => getModal("/photos/white/4.jpg", 1)}>
                  <Image src="/photos/white/4.jpg" width={200} height={133} alt="white 4"/> 
                </div>
                <div layoutId="/photos/white/5.jpg" className={styles.card} onClick={() => getModal("/photos/white/5.jpg", 1)}>
                  <Image src="/photos/white/5.jpg" width={200} height={133} alt="white 5"/> 
                </div>
                <div layoutId="/photos/white/6.jpg" className={styles.card} onClick={() => getModal("/photos/white/6.jpg", 1)}>
                  <Image src="/photos/white/6.jpg" width={200} height={133} alt="white 6"/> 
                </div>
                <div layoutId="/photos/white/7.jpg" className={styles.card} onClick={() => getModal("/photos/white/7.jpg", 1)}>
                  <Image src="/photos/white/7.jpg" width={200} height={133} alt="white 7"/> 
                </div>
                <div layoutId="/photos/white/8.jpg" className={styles.card} onClick={() => getModal("/photos/white/8.jpg", 1)}>
                  <Image src="/photos/white/8.jpg" width={200} height={133} alt="white 8"/> 
                </div>
                <div layoutId="/photos/white/9.jpg" className={styles.card} onClick={() => getModal("/photos/white/9.jpg", 1)}>
                  <Image src="/photos/white/9.jpg" width={200} height={133} alt="white 9"/> 
                </div>
                <div layoutId="/photos/white/10.jpg" className={styles.card} onClick={() => getModal("/photos/white/10.jpg", 1)}>
                  <Image src="/photos/white/10.jpg" width={200} height={133} alt="white 10"/> 
                </div>
                <div layoutId="/photos/white/11.jpg" className={styles.card} onClick={() => getModal("/photos/white/11.jpg", 2)}>
                  <Image src="/photos/white/11.jpg" width={133} height={200} alt="white 11"/> 
                </div>
                <div layoutId="/photos/white/12.jpg" className={styles.card} onClick={() => getModal("/photos/white/12.jpg", 1)}>
                  <Image src="/photos/white/12.jpg" width={200} height={133} alt="white 12"/> 
                </div>
                <div layoutId="/photos/white/13.jpg" className={styles.card} onClick={() => getModal("/photos/white/13.jpg", 1)}>
                  <Image src="/photos/white/13.jpg" width={200} height={133} alt="white 13"/> 
                </div>
                <div layoutId="/photos/white/14.jpg" className={styles.card} onClick={() => getModal("/photos/white/14.jpg", 1)}>
                  <Image src="/photos/white/14.jpg" width={200} height={133} alt="white 14"/> 
                </div>
                <div layoutId="/photos/white/15.jpg" className={styles.card} onClick={() => getModal("/photos/white/15.jpg", 1)}>
                  <Image src="/photos/white/15.jpg" width={200} height={133} alt="white 15"/> 
                </div>
            </motion.div>
            </motion.div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 className={styles.title}>Gold Kimono and Black Hakama</h1>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}transition={{duration: 0.5}} ref={carousel2} drag="x" dragConstraints={{right:0, left:-carousel2Width- 36}} className={styles.wrapper}>
            
            <motion.div className={styles.carousel}>
                <div layoutId="/photos/gold/1.jpg" className={styles.card} onClick={() => getModal("/photos/gold/1.jpg", 1)}>
                  <Image src="/photos/gold/1.jpg" width={316} height={211} alt="gold 1"/> 
                </div>
                <div layoutId="/photos/gold/2.jpg" className={styles.card} onClick={() => getModal("/photos/gold/2.jpg", 2)}>
                  <Image src="/photos/gold/2.jpg" width={133} height={200} alt="gold 2"/> 
                </div>
                <div layoutId="/photos/gold/3.jpg" className={styles.card} onClick={() => getModal("/photos/gold/3.jpg", 2)}>
                  <Image src="/photos/gold/3.jpg" width={133} height={200} alt="gold 3"/> 
                </div>
                <div layoutId="/photos/gold/4.jpg" className={styles.card} onClick={() => getModal("/photos/gold/4.jpg", 1)}>
                  <Image src="/photos/gold/4.jpg" width={316} height={211} alt="gold 4"/> 
                </div>
                <div layoutId="/photos/gold/5.jpg" className={styles.card} onClick={() => getModal("/photos/gold/5.jpg", 1)}>
                  <Image src="/photos/gold/5.jpg" width={316} height={211} alt="gold 5"/> 
                </div>
                <div layoutId="/photos/gold/5.jpg" className={styles.card} onClick={() => getModal("/photos/gold/6.jpg", 1)}>
                  <Image src="/photos/gold/6.jpg" width={316} height={211} alt="gold 5"/> 
                </div>
              </motion.div>
            </motion.div>
            </div>
            <p className={styles.message}>We would like to thank all of our friends, family, teachers, and colleagues for their incredible support and love on this special occasion!</p>
                      
      
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} width={width} height={height}img={img} orient={orient}/>}
      </AnimatePresence>
    </div>
  );
}

export default App;

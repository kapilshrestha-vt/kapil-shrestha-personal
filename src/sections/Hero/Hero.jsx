import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'

function Hero() {
  return 
    <section id="hero">
      <div className={styles}> <img className={styles.hero} scr={heroImg} alt="Profile Pic of Kapil Shrestha"/></div>
    </section>;
  
}

export default Hero

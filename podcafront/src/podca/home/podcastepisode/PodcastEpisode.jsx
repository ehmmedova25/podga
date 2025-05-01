import React from "react";
import { Link } from "react-router"; // Bu eklendi
import styles from "./PodcastEpisode.module.css";
import { FiMenu } from "react-icons/fi";

const PodcastEpisode = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.overlay}></div>

      <div className={styles.header}>
        <div className={styles.logo}>Podca</div>
        
        <div className={styles.navLinks}>
          <Link to="/dashboard" className={styles.dashboardLink}>
            Dashboard
          </Link>
        </div>

        <div className={styles.menuIcon}>
          <FiMenu size={28} color="#fff" />
        </div>
      </div>

      <div className={styles.content}>
        <h1>Episode 09: How To Create <br /> Web Page Using Bootstrap 4</h1>
        <p className={styles.meta}>By Mike Smith | 16 September 2017 | 1:30:20</p>
        <button className={styles.button}>READ THE TRANSCRIPT</button>
      </div>

      <div className={styles.audioPlayer}>
        <audio controls className={styles.audio}>
          <source src="#" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default PodcastEpisode;

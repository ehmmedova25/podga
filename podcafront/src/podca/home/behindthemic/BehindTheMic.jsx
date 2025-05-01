import React from 'react';
import styles from './BehindTheMic.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    description: 'Leads the creative vision and brand direction with passion.',
    image: 'https://preview.colorlib.com/theme/podca/images/person_1.jpg',
  },
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    description: 'Leads the creative vision and brand direction with passion.',
    image: 'https://preview.colorlib.com/theme/podca/images/person_2.jpg',
  },
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    description: 'Leads the creative vision and brand direction with passion.',
    image: 'https://preview.colorlib.com/theme/podca/images/person_3.jpg',
  },
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    description: 'Leads the creative vision and brand direction with passion.',
    image: 'https://preview.colorlib.com/theme/podca/images/person_4.jpg',
  },
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    description: 'Leads the creative vision and brand direction with passion.',
    image: 'https://preview.colorlib.com/theme/podca/images/person_5.jpg',
  },
  {
    name: 'Megan Smith',
    role: 'Creative Director',
    description: 'Leads the creative vision and brand direction with passion.',
    image: 'https://preview.colorlib.com/theme/podca/images/person_6.jpg',
  },
];

const BehindTheMic = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Behind The Mic</h2>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <div className={styles.overlay}>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.desc}>{member.description}</p>
              <div className={styles.socials}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehindTheMic;

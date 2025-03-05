import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';
import EventCategories from '../components/EventCategories';
import SponsorSection from '../components/SponsorSection';
import TeamSection from '../components/TeamSection';
import BuilderSection from '../components/BuilderSection';
import VisitCounter from '../components/VisitCounter';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Banner />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <EventCategories />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <SponsorSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <TeamSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <BuilderSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <VisitCounter />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
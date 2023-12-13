import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
import ScrollAnimation from 'react-animate-on-scroll';
import github from '../Images/github logo.png';
import classes from './projects.css';

// Web Projects
const cardItem = [
  {
    // link:
    title: 'Whack-That-Mole',
    techStack: 'Tech Stack: JavaScript, HTML, CSS',
    desc: 'Front-End Browser Game in vanilla HTML, CSS, and JavaScript',
    // color: ,
    // image: ,
    githubLink: 'link to project',
  },
  {
    // link:
    title: 'API UI Pattern',
    techStack: 'Tech Stack:',
    desc: 'Carousel Slideshow pulling API images and Facts',
    // image: ,color: ,
    githubLink: '',
  },
  {
    // link:
    title: 'Food Wars',
    techStack: 'Tech Stack: JavaScript, HTML, CSS',
    desc: 'Front-End Browser Game in vanilla HTML, CSS, and JavaScript',
    // color: ,
    // image: ,
    githubLink: 'link to project',
  },
  {
    // link:
    title: 'Petstagram',
    techStack: 'Tech Stack: JavaScript, HTML, CSS',
    desc: 'Front-End Browser Game in vanilla HTML, CSS, and JavaScript',
    // color: ,
    // image: ,
    githubLink: 'link to project',
  },
];

const Projects = () => {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45} key={cardItem.title}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank' rel='noopener noreferrer'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              window.open(cardItem.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            <img src={github} className={classes.card__title__img} alt='GitHub' />
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;

import React from 'react';
import Layout from '../components/layout';
import Head from "../components/head"
import aboutStyles from "./about.module.scss"
const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <div className={aboutStyles.bio}>
        <p>Commodore64? War Games? Daytime TV advertisements for some technical college showing giant machines with tape reels promising a career in computer data? Yes please!<br />
          I'm a mid-life career changer. After having a great career as musician
          and commercial music composer, I decided to attend <a href="https://flatironschool.com/"
          target="_blank" rel="noreferrer">The Flatiron School</a>{" "}
          coding bootcamp here in NYC. About 4 months after graduating, 
          I was able to land my first tech job as a junior full-stack engineer. I'm proficient in
          HTML5, CSS3, Javascript ES6/7, ReactJS, Redux, Ruby on Rails and
          familiar with React Native, NodeJS, the AWS platform and of course
          GatsbyJS which is the framework for this blog! Did I mention I'm passionate about coding? 
        </p><br />
        <p>I live in Brooklyn, NY and co-parent my 5 year old daughter with my ex-wife. I'm also a guitar player 
          and planning to start my own YT channel dedicated to that. 
        </p>
      </div>
      <p>
        <a
          href="https://dsound-zz.github.io/profilePage/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Portfolio</strong>
        </a>
      </p>
      <p>
        <a href="https://github.com/dsound-zz" target="_blank" rel="noreferrer">
         <strong>Github</strong>
        </a>
      </p>

      <p>
        React out to me at:{" "}
        <a href="mailto: demiansims@gmail.com" target="_blank" rel="noreferrer">
          demiansims@gmail.com
        </a>
      </p>
    </Layout>
  )
};

export default About;

import React from 'react';
import logo from './logo.svg';
import fav from './fav.svg';
import insta from './instagram.svg';
import facebook from './facebook.svg';
import france from './world.svg';
import cible from './aim.svg';
import unis from './united.svg';
import calendrier from './interface(1).svg';
import uci from './1200px-Flag_of_UCI.svg.png';
import left from './79455_pfp-removebg-preview.png';
import right from './B9720747259Z-removebg-preview.png';
import footer from './footer.svg';
import canyon from './Canyon.png';
import sram from './sram.png';
import redbull from './Logo-Red-Bull.jpg';
import ffc from './ffc.svg';
import './App.css';
import more from './circle-down_major_monotone.svg';
import Card from './Card.js';

function App() {
  return (
    <div className='App'>
      <header id='me'>
        <img src={fav} alt='triangle logo' />
        <a href='#me'>ABOUT ME</a>
        <a href='#career'>MY CAREER</a>
        <a href='#sponsor'>MY SPONSOR</a>
        <div className='social'>
          <img src={insta} className='insta' alt='logo insta' />
          <img src={facebook} className='fb' alt='logo facebook' />
        </div>
      </header>
      <img
        src={logo}
        className='dessin'
        alt='Pauline Ferrand-Prevot (dessin montagne)'
      />
      <div className='title'>
        <h1>
          PAULINE
          <br />
          <span>FERRAND-PREVOT</span>
        </h1>
        <a href='#career' className='more'>
          <button>
            MORE
            <img src={more} />
          </button>
        </a>
      </div>
      <div class='grid-3' id='career'>
        <Card src={france} name='French' />
        <Card src={calendrier} name='28 years' />
        <Card src={unis} name='Canyon-SRAM Racing' />
      </div>
      <div className='grid-2'>
        <Card src={cible} name='Punchy' />
        <Card src={uci} name='8 world championships' />
      </div>
      <div className='footer' id='sponsor'>
        <img
          src={left}
          className='left'
          alt='Paline Ferrand-Prevot Championne du monde'
        />
        <img
          src={right}
          className='right'
          alt='Paline Ferrand-Prevot lève les bras'
        />
        <img src={canyon} className='canyon' alt='canyon logo' />
        <img src={sram} className='sram' alt='sram logo' />
        <img src={redbull} className='redbull' alt='redbull logo' />
        <img src={ffc} className='ffc' alt='ffc logo' />
        <img src={footer} className='mount' alt='montagne svg' />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
const links = [
  {
  url: '#',
  title: 'Welcome'
  },
  {
    url: '#',
    title: 'Menu'
  },
  {
    url: '#',
    title: 'Events'
  },
  {
    url: '#',
    title: 'Contact'
  }
]

const sections = [
  {
    type: 1,
    data: {
      title: 'Indian traditional flavours',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      bg: '../images/img1.png'
    }
  },
  {
    type: 2,
    data: {
      items: [
        {
          title: 'New tastes',
          desc: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
        },
        {
          title: 'New tastes',
          desc: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
        },
        {
          title: 'New tastes',
          desc: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
        }
      ]
    }
  },
  {
    type: 3,
    data: {
      title: 'India',
      subTitle: 'On your plate',
      bg: '',
      items: [
        {
          title: 'Tikka chicken',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do',
          price: '$14.95',
          bg: '',
          position: 'left',
        },
        {
          title: 'Tikka chicken',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do',
          price: '$14.95',
          bg: '',
          position: 'left',
        },
        {
          title: 'Tikka chicken',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do',
          price: '$14.95',
          bg: '',
          position: 'right',
        },
        {
          title: 'Tikka chicken',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do',
          price: '$14.95',
          bg: '',
          position: 'right',
        },
        {
          title: 'Tikka chicken',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do',
          price: '$14.95',
          bg: '',
          position: 'left',
        },
        {
          title: 'Tikka chicken',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do',
          price: '$14.95',
          bg: '',
          position: 'left',
        },
      ]
    }
  },
]

function App() {
  return (
    <div className="container">
      <Header links={links}/>
      <MainContent sections={sections}></MainContent>
      <Footer/>
    </div>
  );
}

export default App;

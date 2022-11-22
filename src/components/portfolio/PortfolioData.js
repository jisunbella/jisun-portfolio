import lightAndSaltMain from '../../assets/lightandsalt/lightandsalt.png'
import eagleEyeMain from '../../assets/eagleeye/eagleeye-main.png'
import artPortalMain from '../../assets/artportal/artPortal-main.png'
import artPortalLogin from '../../assets/artportal/artPortal-login.png'
import artPortalSearch from '../../assets/artportal/artPortal-search.png'
import dmiMain from '../../assets/dmi/dmi-main.png'
import dmiCategory from '../../assets/dmi/dmi-category.png'
import dmiDetail from '../../assets/dmi/dmi-detail.png'
import ftscMain from '../../assets/ftsc/ftsc-main.png'
import ftscLogin from '../../assets/ftsc/ftsc-login.png'
import ftscSignUp from '../../assets/ftsc/ftsc-signup.png'
import ftscBoard from '../../assets/ftsc/ftsc-board.png'

const data = [
  {
    id: 1,
    title: 'Light and Salt',
    imgSrc: [lightAndSaltMain],
    category: 'personal',
    desc: 'A website for finding and rating restaurants',
    stack: 'HTML ・ CSS ・ JavaScript ・ jQuery ・ Bootstrap ・ Java ・ Spring Framework ・ MySQL'
  },
  {
    id: 2,
    title: 'A Drone Monitoring Solution',
    imgSrc: [eagleEyeMain],
    category: 'work',
    desc: 'A solution for tracking and monitoring drones at Incheon International Airport',
    stack: 'HTML ・ CSS ・ JavaScript ・ jQuery ・ OpenLayers ・ Leaflet ・ C# ・ .Net Core ・ SignalR ・ RabbitMQ ・ SQL Server'
  },
  {
    id: 3,
    title: 'A Server Monitoring Website',
    imgSrc: [artPortalMain, artPortalLogin, artPortalSearch],
    category: 'work',
    desc: 'A solution for monitoring LDAP Server and Exchange Server and saving logs and data',
    stack: 'HTML ・ CSS ・ JavaScript ・ jQuery ・ C# ・ .Net Core ・ PowerShell ・ SignalR ・ RabbitMQ ・ SQL Server'
  },
  {
    id: 4,
    title: 'An E-Commerce Website for Drone',
    imgSrc: [dmiMain, dmiCategory, dmiDetail],
    category: 'work',
    desc: 'A solution for E-commerce website for selling hydrogen drones and battery',
    stack: 'HTML ・ CSS ・ Vue.js ・ Nuxt.js ・ C# ・ .Net Core ・ SQL Server'
  },
  // {
  //   id: 5,
  //   title: 'Admin Websites',
  //   imgSrc: [],
  //   category: 'work',
  //   desc: 'A solution for admin dashboards and saving logs and data',
  //   stack: 'HTML ・ CSS ・ Vue.js ・ Nuxt.js ・ C# ・ .Net Core ・ SQL Server'
  // },
  {
    id: 5,
    title: 'A Website for Questions and Answers',
    imgSrc: [ftscMain, ftscLogin, ftscSignUp, ftscBoard],
    category: 'work',
    desc: 'A website for clients and their customers for QnA',
    stack: 'HTML ・ CSS ・ JavaScript ・ jQuery ・ C# ・ .Net Framework ・ SQL Server'
  }
]


export default data;
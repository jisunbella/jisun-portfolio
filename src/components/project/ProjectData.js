import lightAndSaltMain from '../../assets/lightandsalt/lightandsalt.png'
import eagleEyeMain from '../../assets/eagleeye/eagleeye-main.png'
import artPortalMain from '../../assets/artportal/artPortal-main.png'
import dmiDetail from '../../assets/dmi/dmi-detail.png'
import cnrBoard from '../../assets/cnr/cnr-board.png'
import ftscMain from '../../assets/ftsc/ftsc-main.png'
import jshop from '../../assets/jshop.png'

const data = [
    {
    id: 1,
    title: 'JShop',
    image: [jshop],
    category: 'personal',
    desc: 'https://github.com/jisunbella/jshop',
    stack: 'React.js • Redux • Hooks • GraphQL • Stripe • Firebase'
  },
  {
    id: 2,
    title: 'Admin Website',
    image: [ftscMain],
    category: 'work',
    desc: 'Website for clients and their customers for QnA',
    stack: 'HTML • CSS • JavaScript • jQuery • C# • .Net Framework • SQL Server'
  },
  {
    id: 3,
    title: 'Admin Website',
    image: [cnrBoard],
    category: 'work',
    desc: 'Website for admin dashboards and saving logs and data',
    stack: 'HTML • CSS • Vue.js • Nuxt.js • C# • .Net Core • SQL Server'
  },
  {
    id: 4,
    title: 'E-Commerce',
    image: [dmiDetail],
    category: 'work',
    desc: 'E-commerce website for selling hydrogen drones and battery',
    stack: 'HTML • CSS • Vue.js • Nuxt.js • C# • .Net Core • SQL Server'
  },
  {
    id: 5,
    title: 'Server Monitoring',
    image: [artPortalMain],
    category: 'work',
    desc: 'Solution for monitoring AD Server and Exchange Server and saving logs and data',
    stack: 'HTML • CSS • JavaScript • jQuery • C# • .Net Core • RabbitMQ • SQL Server'
  },
  {
    id: 6,
    title: 'Drone Tracking',
    image: [eagleEyeMain],
    category: 'work',
    desc: 'Solution for tracking and monitoring drones at Incheon International Airport',
    stack: 'HTML • CSS • JavaScript • jQuery • C# • .Net Core • RabbitMQ • SQL Server'
  },
  {
    id: 7,
    title: 'Light and Salt',
    image: [lightAndSaltMain],
    category: 'personal',
    desc: 'Website for finding and rating restaurants',
    stack: 'HTML • CSS • JavaScript • jQuery • Bootstrap • Java • Spring Framework • MySQL'
  },
]


export default data;
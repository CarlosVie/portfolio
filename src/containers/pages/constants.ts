import { ProjectProps } from '../components/type';

const PROJECTS_INFO: ProjectProps[] = [
  {
    id: 1,
    name: 'Hapli',
    type: 'Mobile',
    description: 'Mobile app use to make payment and transaction using onlu our phone, Using FLutter as framework',
    link: '',
    img: require('../../assets/proj-hpl.jpg')
  },
  {
    id: 2,
    name: 'Autonomous Driving',
    type: 'Backend',
    description: 'Cloud infrastructure use to provide road information to the car',
    img: require('../../assets/proj-bmw.jpg')
  },
  {
    id: 3,
    name: 'Bank Payment',
    type: 'WebApp',
    description: 'Dashboard use by a bank users to visualize relevant information about yours commerce',
    link: '',
    img: require('../../assets/proj-nat.jpg')
  },
  {
    id: 4,
    name: 'Weather WebApp',
    type: 'Website',
    description: 'This was a simple project to implement API consuming and representing this information' +
      'on a design way. ',
    link: '',
    img: require('../../assets/proj-weat.jpg')
  },
  {
    id: 5,
    name: 'Crypto Dashboard',
    type: 'Website',
    description: 'Dashboard with real time information about all crypto currency. Presenting all information about each one ' +
      'and others relevant information about them.',
    link: '',
    img: require('../../assets/proj-cryt.jpg')
  },
  {
    id: 6,
    name: 'Portfolio',
    type: 'Website',
    description: 'Is this website',
    link: '',
    img: require('../../assets/proj-portf.jpg')
  }
]

export default PROJECTS_INFO;
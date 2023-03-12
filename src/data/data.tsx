import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
 // OfficeBuildingIcon,
 // SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.gif';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
/*import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
//import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  //TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'à propos de moi',
  Contact: 'contact',
  Portfolio: 'mes projets',
  Resume: 'mon parcours',
  Skills: 'skills',
  Stats: 'stats',
  //Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  salut: `Salut !`,
  name: `Moi c'est Adam HENCHIRI.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Jeune   <strong className="text-stone-100">passionné</strong> par les nouvelle technologies .
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Étudiant</strong>,
        en bachelor informatique .
      </p>
    </>
  ),
  actions: [
    {
      href: './assets/resume.pdf',
      text: 'Mon CV',
      primary: true,
      Icon: DownloadIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Je suis étudiant en 2ème année de BUT informatique spécialisé en réalisation d'applications, conception, développement et validation. Un cursus très enrichissant qui me permet de découvrir concrètement toutes les facettes de l'élaboration de projets IT.`,
  aboutItems: [
    {label: 'Adresse', text: 'Sète, Occitanie', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationalitée', text: 'Française / Tunisienne', Icon: FlagIcon},
    {label: 'étude', text: 'Institut Universitaire Téchnologique de Montpellier/Sète', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langue',
    skills: [
      {
        name: 'Français',
        level: 9,
      },
      {
        name: 'Arabe',
        level: 9,
      },
      {
        name: 'Anglais',
        level: 7,
      },
    ],
  },
  {
    name: 'Développement frontend ',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'JAVASCRIPT',
        level: 6,
      },
      {
        name: 'REACT',
        level: 1,
      },
    ],
  },
  {
    name: 'Développement backend',
    skills: [
      {
        name: 'JAVA',
        level: 8,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'C',
        level: 5,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 1,
      },
    ],
  },
  {
    name: 'Base de Donnée',
    skills: [
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'plSql',
        level: 8,
      },
    ],
  },
  {
    name: 'Développement Mobile',
    skills: [
      {
        name: 'Android',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Jeu du Scrabble',
    description: "Pour appliquer les bases de la programmation orienté objet en JAVA j'ai développer avec mon collaborateur Pierre.G un jeu de scrabble sur terminal.",
    url: 'https://github.com/AdamHenchiri/Scrabble',
    image: porfolioImage1,
  },
  {
    title: 'Jeu les Aventuriers Du Rail',
    description: 'Pour en savoir plus, Vous pouvez retrouver un carrousel explicatif en cliquant ici.',
    url: 'https://view.genial.ly/6404c7dd0d230700130d1953/presentation-magnetic-whiteboard-presentation',
    image: porfolioImage2,
  },
  {
    title: 'Your Voice',
    description: "Une application web développer en PhP Vanilla, un projet que j'ai éxecuter en tant que Scrum Master qui vise a obtenir une plateform de vote libre sur différents sujets.",
    url: 'https://webinfo.iutmontp.univ-montp2.fr/~henchiria/yourvoice/web/frontController.php',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
 /* {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'SEPT 2022 - JUIN 2023    ',
    location: 'IUT de Montpellier-Sète, France ',
    title: '2eme année en BUT informatique',
    content: <p>2eme année en Bachelor Universitaire Technologique en informatique parcours Réalisation d'applications : conception,
    développement, validation. semestre 3 validé avec 13.79 de moyenne</p>
    ,
  },
  {
    date: 'SEPT 2021 - JUIN 2022',
    location: 'IUT de Montpellier-Sète, France ',
    title: '1er année en BUT informatique',
    content: <p>1er année en Bachelor Universitaire Technologique en informatique validée avec 13.69 de moyenne géneral.</p>,
  },
  {
    date: 'SEPT 2020 - JUIN 2021',
    location: 'Lycée Houmt-souk Djerba, Tunisie',
    title: 'Bac option informatique',
    content: <p>Baccalauréat général option informtique obtenue avec MENTION assez bien.</p>,
  },
];

/*export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];
*/

/**
 * Testimonial section
 */
/*
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};
*/
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '',
  description: "Vous avez une question ? N'hésitez pas à me contacter !",
  items: [
    {
      type: ContactType.Email,
      text: 'adam.henchiri@etu.umontpellier.fr',
      href: 'mailto:adam.henchiri@etu.umontpellier.fr',
    },
    {
      type: ContactType.Location,
      text: 'Sète, France',
      href : 'https://goo.gl/maps/FLyagfNp59i3Pw3j7'
    },
    {
      type: ContactType.Github,
      text: 'AdamHenchiri',
      href: 'https://github.com/AdamHenchiri',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/AdamHenchiri'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/adam-henchiri'},
];

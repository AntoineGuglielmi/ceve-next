import { TypeData } from '@/types/data/TypeData'

export const data: TypeData = {
  infos: {
    firstname: 'Antoine',
    lastname: 'Guglielmi',
    address1: '66 rue Jean-Joseph Genissieu',
    address2: '',
    postalCode: '26000',
    city: 'Valence',
    tel: '06.84-71.71 90',
    email: 'contact.antoine.guglielmi@gmail.com',
    webSite: 'https://antoine-g.com/',
    photo: true,
  },

  intro: {
    title: 'Développeur Frontend',
    text: 'Passionate and curious front-end developer, I have built my career around creating intuitive and high-performance digital experiences. My journey is driven by a constant desire to learn, innovate, and turn ideas into tangible solutions.',
  },

  follows: {
    title: 'Follow me',
    list: [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/antoineguglielmi/',
      },
      {
        title: 'Github',
        link: 'https://github.com/AntoineGuglielmi',
      },
    ],
  },

  skills: {
    hard: {
      title: 'Hard skills',
      list: [
        'Nextjs',
        'React',
        'Nuxt.js',
        'Vue.js',
        'Tailwind',
        'Typescript',
        'Javascript',
        'PHP',
        'Linux',
        'Git',
        'Github',
        'Bitbucket',
        'Gitlab',
        'Azure',
        'Jira',
        'GraphQL',
        'APIs creation and consumption',
        'Apollo',
        'MySql',
        'English (B1)',
        'French (mother language)',
      ],
    },

    soft: {
      title: 'Soft skills',
      list: [
        'Learning abilities (self-taught or accompanied)',
        'Management',
        'Scrum Methodology',
        'Technical leadership & proactivity',
        'Pedagogy & communication',
        'Collaboration & teamwork',
        'Perseverance & initiative',
        'Recognition & positive impact',
      ],
    },
  },

  misc: {
    title: 'Miscellaneus',
    list: [
      'Cooking',
      'Classic literature (Shirley Jackson, H.P. Lovecraft, Arthur Conan Doyle, Mary Shelley, ...)',
      'Badminton',
      'Web technology watch',
    ],
  },

  experiences: {
    title: 'Experiences',
    list: [
      {
        title: 'Full Stack Developer',
        organism: 'Adeqausys',
        geo: 'Romans-sur-Isère, 26100',
        start: '05/2025',
        end: 'Present',
        jobs: [
          {
            title: 'SIRH',
            text: 'Full-stack developer (PHP / JavaScript, React). Strong front-end focus, with recognized contributions to UI modernization, such as the adoption of BEM methodology, design system structuring, and UX improvements.',
          },
        ],
      },
      {
        title: 'Frontend Developer',
        organism: 'Insign',
        geo: 'Tournon-sur-Rhône, 07300',
        start: '01/2022',
        end: '01/2025',
        jobs: [
          {
            title: 'Explorer - Les 3 Vallées',
            text: 'Creation of Explorer, a fun user experience around skiing using Leaflet. https://urlz.fr/qK4D',
          },
          {
            title: "L'Atelier Parfum",
            text:
              'Creation of an AI/user Emotion Experience based on facial recognition, ' +
              'developed in Nuxtjs. https://urlz.fr/ogu5',
          },
          {
            title: 'Bjorg to be alive',
            text: 'Development, as lead front developer, of a complete digital platform to support an activation campaign. Developed in Nuxt.js, integration of Matomo Analytics. https://urlz.fr/sODk',
          },
          {
            title: 'Interflora',
            text:
              "Multi-country migration (italy, spain, portugal) after interflora.fr multi-device pilot site's redesign, " +
              'partially as lead developer. Interflora was voted best online e-commerce site! https://urlz.fr/mKfw',
          },
        ],
      },

      {
        title: 'Information System Operator',
        organism: 'Groupe Vincent',
        geo: 'Étoile-sur-Rhône, 26800',
        start: '04/2021',
        end: '01/2022',
        jobs: [
          {
            title: 'Régie',
            text: 'Maintenance and evolution of "Régie", the Group Vincent ERP solution.',
          },
        ],
      },

      {
        title: 'Flexography Workshop Manager',
        organism: 'Fiter, groupe Rétif',
        geo: 'Bourg-lès-Valence, 26500',
        start: '05/2013',
        end: '04/2021',
        jobs: [
          {
            title: 'Manager',
            text: 'Management of the workshop and a team assigned to production.',
          },
          {
            title: 'Machine operator',
            text: 'Installation of the flexography activity.',
          },
        ],
      },
    ],
  },

  diplomas: {
    title: 'Diplomas',
    list: [
      {
        title: 'Multimedia Graphic Designer',
        organism: 'École Brassart (formerly Aries)',
        geo: 'Lyon, 69007',
        start: '2015',
        end: '2016',
        desc: null,
      },
      {
        title: 'Professional License in Plastics',
        organism: 'IUT de Chambéry',
        geo: 'Chambéry, 73000',
        start: '2009',
        end: '2010',
        desc: null,
      },
      {
        title: 'Baccalauréat S',
        organism: 'Lycée Polyvalent Jean-Paul de Rocca Serra',
        geo: 'Porto-Vecchio, 20137',
        start: '2015',
        end: '2015',
        desc: null,
      },
    ],
  },
}

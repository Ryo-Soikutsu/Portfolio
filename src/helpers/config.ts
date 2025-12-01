import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Ryo Soikutsu',
  description: '',
  source: 'https://github.com/Ryo-Soikutsu/Portfolio',
  baseUrl: '',
  initialFeeds: '',
  additionalFeeds: [
  ],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Personal projects',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links and GPG keys',
    },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
  ],
  footerInfo: {
    author: 'Ryo Soikutsu',
    authorSite: 'https://github.com/Ryo-Soikutsu',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'Ryo-Soikutsu',
  defaultTheme: 'callisto',
  defaulttool: 'en',
  colorSchemes: {
    dark: {
      // background: '#101010',
      // foreground: '#fafafa',
      // 'dimmed-text': '#808080',
      // 'card-background': '#1b1b1b',
      // 'card-border': '1px solid #2a2a2a',
      // 'code-background': '#333',
      // accent: '#01c0f0',
      // 'accent-1': '#ff0099',
      // 'accent-2': '#b45eff',
      // 'accent-3': '#01c0f0',
      // 'accent-4': '#1de691',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      // background: '#ededed',
      // foreground: '#2a3367',
      // 'card-background': '#F8F8FF',
      // 'card-border': '1px solid #0000001a',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
      
      // 'home-animated-gradient-outer': '#ffe7f500',
      // 'home-animated-gradient-inner': '#ff8ed05c',
    },
    callisto: {
      // background: '#020617',
      // foreground: '#dcdcdc',
      // 'dimmed-text': '#8892b0',
      // 'card-background': '#0b1021',
      // 'card-border': '1px solid #ffffff1a',
      // 'accent-1': '#00ccb4',
      // 'accent-2': '#00ccb4',
      // 'accent-3': '#00ccb4',
      // 'accent-4': '#00ccb4',
      // 'voronoi-background': '#0a192f',

      // 'home-accent-background': '#fff',
      // 'home-tile-background': '#0B1021',
      // 'home-animated-gradient-outer': '#0361f700',
      // 'home-animated-gradient-inner': '#2e2d40',
    },
  },
  workExperience: [
    {
      company: 'AND.Digital',
      companyUrl: 'https://and.digital/',
      companyLogo: 'https://and.digital/favicon.ico',
      jobTitle: 'Principle Engineer',
      datesWorked: 'August 2022 - Present',
      responsibilities: 'As a member of the Practice Group within Hamilton Club, '
      + 'I work across several client projects, ensuring that '
      + 'code quality, maintainability and security are top notch. '
      + 'I\'m responsible for training up our developers, helping them gain '
      + 'the skills necessary to best support our clients. '
      + 'I\'m always up for trying out new tech, so that I\'m in a good position '
      + 'to choose the best tech stacks on a per-client basis.',
      projectType: 'Clients',
      projects: [
        { name: 'International SOS', logo: 'https://i.ibb.co/WgKKMFQ/Isos.jpg', description: '', },
        { name: 'Frasers Group', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', description: '', },
        { name: 'Lloyds Bank', logo: 'https://i.ibb.co/GCSDPCq/Lloyds-bank.jpg', description: '', },
      ],
      technologies: [ 'TypeScript', 'React Native', 'Azure' ],
    },
  ],
  projectComplimentaryData: [
      
  ],
  postComplimentaryData: [

  ],
  contact: {
    name: 'Ryo Soikutus',
    email: 'ryo_soikutsu@northland.dev',
    website: 'https://northland.dev',
    socials: {
      GitHub: 'Ryo-Soikutsu',
      LinkedIn: 'in/shum-hoe-yeong',
    },
    socialButtonLimit: 2,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
    pgpKeyLink: '', 
    pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEaSbmaBYJKwYBBAHaRw8BAQdAEDH0LqziT1NgW78iGDVej7zTafxbOeyL
pB5h/7Mfc0XNL3J5by1zb2lrdXRzdUBwcm90b24ubWUgPHJ5by1zb2lrdXRz
dUBwcm90b24ubWU+wsARBBMWCgCDBYJpJuZoAwsJBwkQqubEwHTlurpFFAAA
AAAAHAAgc2FsdEBub3RhdGlvbnMub3BlbnBncGpzLm9yZ8gn8OCjNySuDBsL
7a5DBrde2ZdDDfmjcGoI8STgEmuEAxUKCAQWAAIBAhkBApsDAh4BFiEEl0ia
0mMpIXMJvdhLqubEwHTluroAAHKXAQCAYAjDPrlexSwwp6nDcDO34h0mAmO+
J00RW5I+lgJKSgEA6QmdE4UGQuL1QnMyHLY4CUI13AITKAcJi3Oznd0c5gjO
OARpJuZoEgorBgEEAZdVAQUBAQdAHS5PrzDqA1PVWAwtd3lKv8KVIIt4YU1q
vMLGy+lltD8DAQgHwr4EGBYKAHAFgmkm5mgJEKrmxMB05bq6RRQAAAAAABwA
IHNhbHRAbm90YXRpb25zLm9wZW5wZ3Bqcy5vcmcU8JtLVGsAby7Gdjq9DBJD
QLDwTUMRdsrO4YZZQOoYWAKbDBYhBJdImtJjKSFzCb3YS6rmxMB05bq6AAB9
QwD/Q/qLRu2K4MaRLlasOJqCKZK33pm2Qfs1rNemiReWzwcA/1XH0crKFjvT
C58S6/KZz8qMvMWOowSPmugMIxLhLxcF
=nbiv
-----END PGP PUBLIC KEY BLOCK-----`,
  },
  about: {
    intro: 'Hello World...',
    bio: [
      "I'm Ryo Soikutsu, a cybersecurity student in Singapore",

      `I have interest in red-team and blue-team cybersecurity activities. As well as teaching others about cybersecurity`,

      `I enjoy participating in, and organizing capture-the-flag (CTFs) competitions. <br>
       I am part of a CTF team, Yes But No. I also help to organize CTFs and workshops for my school's cybersecurity club.`,

      `I have my own blog, where I publish CTF challenge writeups and challenge creation tutorials to share my experience. You can check out my blog <a href="https://blog.northland.dev">here.</a> <br>
       I enjoy using Linux, and I have a daily driver laptop using Arch Linux. My dotfiles can be found <a href="https://github.com/Ryo-Soikutsu/dotfiles">here</a>`,

      `Currently Im a student at a polytechnic in Singapore. I am also part of the <a href="https://www.worldskills.sg/">WorldSkills Singapore programme</a>, representing the Cyber Security trade.`,

      `Aside from studies, I enjoy playing video games, particularly technical Minecraft modpacks and space MMOs. `
    ],
    picture: 'src/content/img/about.jpg',
  },
  techStack: {
    'Red Team': [
      {
        tool: 'Metasploit',
        source: ['https://github.com/rapid7/metasploit-framework']
      },
      {
        tool: 'Nmap',
        source: ['https://github.com/nmap/nmap']
      },
      {
        tool: 'Gobuster/Ffuf',
        source: ['https://github.com/OJ/gobuster', 'https://github.com/ffuf/ffuf']
      },
      {
        tool: 'PowerShell Empire',
        source: ['https://github.com/EmpireProject/Empire']
      },
      {
        tool: 'Mimikatz',
        source: ['https://github.com/ParrotSec/mimikatz']
      },
      {
        tool: 'BloodHound',
        source: ['https://github.com/SpecterOps/BloodHound']
      }
    ],
    'Blue Team': [
      {
        tool: 'Chainsaw',
        source: ['https://github.com/WithSecureLabs/chainsaw']
      },
      {
        tool: 'Eric Zimmerman\'s Tools',
        source: ['https://ericzimmerman.github.io/#!index.md']
      },
      {
        tool: 'FTK Imager',
        source: ['https://www.exterro.com/digital-forensics-software/ftk-imager']
      },
      {
        tool: 'Autopsy',
        source: ['https://github.com/sleuthkit/autopsy']
      }
    ],
    SIEM: [
      {
        tool: 'Splunk',
        source: ['https://www.splunk.com/']
      },
      {
        tool: 'Wazuh',
        source: ['https://wazuh.com/']
      }
    ],
    Development: [
      {
        language: 'Bash'
      },
      {
        language: 'Python'
      },
      {
        language: 'PHP'
      },
      {
        language: 'JavaScript (Vanilla)'
      },
      {
        language: 'Docker'
      },
      {
        language: 'C'
      },
      {
        language: 'PowerShell'
      }
    ],
    'Operating Systems': [
      {
        tool: 'Arch Linux (Daily Driver)',
        source: ['https://archlinux.org/']
      },
      {
        tool: 'Windows Server 2019/2022'
      },
      {
        tool: 'Windows 10/11'
      },
      {
        tool: 'CentOS 9',
        source: ['https://www.centos.org/']
      },
      {
        tool: 'Ubuntu Server',
        source: ['https://ubuntu.com/download/server']
      },
      {
        tool: 'Ubuntu Desktop',
        source: ['https://ubuntu.com/download/desktop']
      },
      {
        tool: 'Kali Linux',
        source: ['https://www.kali.org']
      },
      {
        tool: 'REMnux',
        source: ['https://remnux.org/']
      },
      {
        tool: 'FLARE-VM',
        source: ['https://github.com/mandiant/flare-vm']
      }
    ],
    Others: [
      {
        tool: 'Wireshark',
        source: ['https://www.wireshark.org/']
      },
      {
        tool: 'HxD',
        source: ['https://mh-nexus.de/en/hxd/']
      },
      {
        tool: 'CyberChef',
        source: ['https://github.com/gchq/CyberChef']
      },
      {
        tool: 'Tmux',
        source: ['https://github.com/tmux/tmux']
      },
      {
        tool: 'VMware Workstation'
      },
      {
        tool: 'VirtualBox',
        source: ['https://www.virtualbox.org/']
      }
    ]
  },
  //plausible: {
  //  scriptSrc: 'https://no-track.as93.net/js/script.js',
  //  domain: 'aliciasykes.com',
  //},
};

export default config;

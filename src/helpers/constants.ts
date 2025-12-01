import type { SocialNetwork } from '$src/types/Socials';

export const emailJsEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'GitHub',
    icon: 'github2',
    tone: '#585858',
    link: 'https://github.com/',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    tone: '#0A66C2',
    link: 'https://www.linkedin.com/',
    noAt: true,
  }
];

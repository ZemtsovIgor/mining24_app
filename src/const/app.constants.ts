export enum ALERT_TYPES {
  DANGER = 'DANGER',
  SUCCESS = 'SUCCESS',
}

export enum ALERT_CLASSES {
  DANGER = 'alert-danger',
  SUCCESS = 'alert-success',
}

export enum SOCIAL_NETWORKS {
  WHATSAPP = 'WHATSAPP',
  TWITTER = 'TWITTER',
  VK = 'VK',
  TELEGRAM = 'TELEGRAM',
  FACEBOOK = 'FACEBOOK',
}

export const SOCIAL_NETWORKS_LANGUAGE = {
  en: {
    list: [
      SOCIAL_NETWORKS.WHATSAPP,
      SOCIAL_NETWORKS.TWITTER,
      SOCIAL_NETWORKS.VK,
      SOCIAL_NETWORKS.TELEGRAM,
      SOCIAL_NETWORKS.FACEBOOK,
    ],
    links: {
      whatsapp: '#',
      twitter: '#',
      vk: '#',
      telegram: '#',
      facebook: '#',
    },
  },
  ru: {
    list: [
      SOCIAL_NETWORKS.WHATSAPP,
      SOCIAL_NETWORKS.TWITTER,
      SOCIAL_NETWORKS.VK,
      SOCIAL_NETWORKS.TELEGRAM,
      SOCIAL_NETWORKS.FACEBOOK,
    ],
    links: {
      whatsapp: '#',
      twitter: '#',
      vk: '#',
      telegram: '#',
      facebook: '#',
    },
  },
};

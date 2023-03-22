import React from 'react';

import { SOCIAL_NETWORKS, SOCIAL_NETWORKS_LANGUAGE } from '../../const/app.constants';
import {
  Icon,
} from '../Icon/Icon';
import { SocialNetworksStyles } from './SocialNetworks.Styles';

interface Props {
  className?: string;
}

export const SocialNetworks: React.FC<Props> = (props: Props) => {
  const { className } = props;

  const renderSocialNetworks = (social: string, links: any, key: number) => {
    switch (social) {
      case SOCIAL_NETWORKS.WHATSAPP:
        return (
          <a className="link" href={links.youtube} target="_blank" rel="noreferrer" key={key}>
            <Icon name="whatsapp" />
          </a>
        );
      case SOCIAL_NETWORKS.TWITTER:
        return (
          <a className="link" href={links.twitter} target="_blank" rel="noreferrer" key={key}>
            <Icon name="twitter" />
          </a>
        );
      case SOCIAL_NETWORKS.VK:
        return (
          <a className="link" href={links.vk} target="_blank" rel="noreferrer" key={key}>
            <Icon name="vk" />
          </a>
        );
      case SOCIAL_NETWORKS.TELEGRAM:
        return (
          <a className="link" href={links.telegram} target="_blank" rel="noreferrer" key={key}>
            <Icon name="telegram" />
          </a>
        );
      case SOCIAL_NETWORKS.FACEBOOK:
        return (
          <a className="link" href={links.facebook} target="_blank" rel="noreferrer" key={key}>
            <Icon name="facebook" />
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <SocialNetworksStyles className={className}>
      {
        SOCIAL_NETWORKS_LANGUAGE.ru.list.map((social: string, index: number) =>
          renderSocialNetworks(social, SOCIAL_NETWORKS_LANGUAGE.ru.links, index + 1))
      }
    </SocialNetworksStyles>
  );
};

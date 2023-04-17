import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from '../components/Layout';

interface GuestRoutesProps {
  children?: React.ReactElement;
  title?: string;
}

const GuestRoutes: React.FC<GuestRoutesProps> = ({
  children,
  title,
}) => {
  const { t } = useTranslation();
  document.title = `${t(title || '')}`;

  return (
    <AuthLayout>
      { children }
    </AuthLayout>
  );
};

export default GuestRoutes;

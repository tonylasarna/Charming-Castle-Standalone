import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  title?: string;
  description?: string;
  titleKey?: string;
  descriptionKey?: string;
};

export default function SEO({ title, description, titleKey, descriptionKey }: Props) {
  const { t } = useTranslation();
  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedDescription = descriptionKey ? t(descriptionKey) : description;

  useEffect(() => {
    if (resolvedTitle) document.title = resolvedTitle;
    if (resolvedDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', resolvedDescription);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = resolvedDescription;
        document.head.appendChild(newMeta);
      }
    }
  }, [resolvedTitle, resolvedDescription]);

  return null;
}

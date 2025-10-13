import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero({ title, subtitle, description, image, ctaText, ctaLink }) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div>
            <h1 className="hero-title">{title}</h1>
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
            {description && <p className="hero-description">{description}</p>}
          </div>
          {ctaText && ctaLink && (
            <Link className="button button--primary button--lg hero-cta" to={ctaLink}>
              {ctaText}
            </Link>
          )}
        </div>
        <div className="hero-image">
          <img src={useBaseUrl(image)} alt={title} />
        </div>
      </div>
    </div>
  );
}

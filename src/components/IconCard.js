import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function IconCard({
  to,
  icon,
  iconType = 'svg', // 'svg' for custom SVG content or 'image' for icon file path
  title,
  description,
  customClass = '',
  colSize = 'col--6'
}) {
  return (
    <div className={`col ${colSize}`}>
      <Link className={`card ${customClass}`} to={to} style={{ height: '100%' }}>
        <div className="card__body">
          <div className="card-header-with-icon">
            {iconType === 'image' ? (
              <img src={useBaseUrl(icon)} alt={title} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: icon }} />
            )}
            <h4>{title}</h4>
          </div>
          <div className="card-description">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
}

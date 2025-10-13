/**
 * Decap CMS Preview Templates for Brigada SOS
 * These templates provide live preview with Docusaurus styling
 */

(function() {
  'use strict';

  // Wait for CMS to be available
  const initPreviews = () => {
    if (typeof CMS === 'undefined') {
      setTimeout(initPreviews, 100);
      return;
    }

    // Helper function to create HTML elements
    const h = CMS.h;

    /**
     * Preview component for MDX documents
     * This mimics the Docusaurus page structure and styling exactly
     */
    const DocusaurusPreview = CMS.createClass({
      render: function() {
        const entry = this.props.entry;
        const widgetFor = this.props.widgetFor;
        const title = entry.getIn(['data', 'title']);
        const body = widgetFor('body');

        return h(
          'div',
          {
            className: 'cms-preview-content',
            'data-theme': 'dark',
          },
          h(
            'article',
            { className: 'theme-doc-markdown markdown' },
            // Title - using Docusaurus heading classes
            title && h('header', {},
              h('h1', {
                className: 'theme-doc-markdown',
                style: { fontSize: '2.5rem', marginBottom: '1rem' }
              }, title)
            ),
            // Content body with Docusaurus markdown classes
            h('div', {
              className: 'theme-doc-markdown markdown',
              style: { lineHeight: '1.7' }
            }, body)
          )
        );
      }
    });

    /**
     * Enhanced preview for the intro page
     * Note: Cards and JSX components won't render in preview, but styling will match
     */
    const IntroPreview = CMS.createClass({
      render: function() {
        const entry = this.props.entry;
        const widgetFor = this.props.widgetFor;
        const title = entry.getIn(['data', 'title']);
        const body = widgetFor('body');

        return h(
          'div',
          {
            className: 'cms-preview-content',
            'data-theme': 'dark',
          },
          h(
            'article',
            { className: 'theme-doc-markdown markdown' },
            title && h('header', {},
              h('h1', {
                className: 'theme-doc-markdown',
                style: { fontSize: '2.5rem', marginBottom: '1rem' }
              }, title)
            ),
            h('div', {
              className: 'theme-doc-markdown markdown',
              style: { lineHeight: '1.7' }
            }, body),
            // Info note about JSX components
            h(
              'div',
              {
                className: 'admonition admonition-note alert alert--info',
                style: {
                  marginTop: '2rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(84, 199, 236, 0.1)',
                  borderLeft: '4px solid #54c7ec',
                  borderRadius: '0.25rem',
                  fontSize: '0.9rem',
                },
              },
              h('div', { className: 'admonition-heading' },
                h('h5', { style: { margin: 0, fontSize: '0.875rem', textTransform: 'uppercase' }}, '📝 Vista Previa')
              ),
              h('div', { className: 'admonition-content', style: { marginTop: '0.5rem', color: '#b4b4b4' }},
                'Los componentes React (como las tarjetas interactivas) no se renderizan en la vista previa, pero se mostrarán correctamente en el sitio publicado. El formato y estilo del texto coinciden con el sitio real.'
              )
            )
          )
        );
      }
    });

    // Register preview templates for each collection
    CMS.registerPreviewTemplate('intro', IntroPreview);
    CMS.registerPreviewTemplate('guia-principal', DocusaurusPreview);
    CMS.registerPreviewTemplate('configuracion', DocusaurusPreview);
    CMS.registerPreviewTemplate('otras-guias', DocusaurusPreview);
    CMS.registerPreviewTemplate('utilidad', DocusaurusPreview);
    CMS.registerPreviewTemplate('miscelaneo', DocusaurusPreview);

    // Apply dark theme to preview iframe when it loads
    CMS.registerPreviewStyle('/css/custom.css');

    console.log('✅ Decap CMS preview templates registered successfully');
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreviews);
  } else {
    initPreviews();
  }
})();

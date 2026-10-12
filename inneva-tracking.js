(function () {
  var GA_ID = 'G-0JD3D3HGML';

  // Crear gtag (cola) antes de cargar la librería
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('js', new Date());
  gtag('config', GA_ID);

  // Cargar la librería oficial de Google
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(s);

  // Medir clics en enlaces WhatsApp y Teléfono
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!a) return;

    var href = (a.getAttribute('href') || '').trim();
    if (!href) return;

    // WhatsApp
    if (href.indexOf('wa.me') !== -1 || href.indexOf('api.whatsapp.com') !== -1) {
      window.gtag('event', 'whatsapp_click', {
        link_url: href,
        page_location: location.href,
        transport_type: 'beacon'
      });
    }

    // Teléfono
    if (href.indexOf('tel:') === 0) {
      window.gtag('event', 'call_click', {
        link_url: href,
        page_location: location.href,
        transport_type: 'beacon'
      });
    }
  }, true);
})();

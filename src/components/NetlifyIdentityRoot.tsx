'use client';

import Script from 'next/script';

function bindNetlifyIdentity() {
  const ni = window.netlifyIdentity;
  if (!ni) return;

  let loginRedirectAttached = false;
  const attachLoginRedirect = () => {
    if (loginRedirectAttached) return;
    loginRedirectAttached = true;
    ni.on('login', () => {
      window.location.href = '/admin/';
    });
  };

  ni.on('init', (user: unknown) => {
    if (!user) {
      attachLoginRedirect();
    }
  });

  const hash = window.location.hash;
  if (hash.includes('recovery_token') || hash.includes('invite_token')) {
    attachLoginRedirect();
  }
}

export default function NetlifyIdentityRoot() {
  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
      onLoad={bindNetlifyIdentity}
    />
  );
}

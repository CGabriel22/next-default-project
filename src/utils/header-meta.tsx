import React from 'react';

export default function HeaderMeta() {
  // TODO: Adicionar metadados fixos de header
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="descrição" />
      <meta name="keywords" content="palavras, chaves" />
      <meta name="author" content="Adstrito" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </>
  );
}

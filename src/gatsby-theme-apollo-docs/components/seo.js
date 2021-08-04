// src/gatsby-theme-apollo-docs/components/seo.js
import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description, siteName }) {
  return (
    <Helmet>
      <link rel="icon" href="../../assets/logo.svg" />
      <meta property="og:image" content="https://cdn.infinitybots.xyz/images/png/Infinity5.png" />
      {/* other SEO tags (OpenGraph, Twitter, etc.) */}
    </Helmet>
  );
}

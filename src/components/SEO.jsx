import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ data }) => {
    if (!data) return null;

    const { title, description, ogImage } = data;
    const siteUrl = window.location.href; // In production, this might need to be a fixed URL or prop

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {ogImage && <meta property="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

export default SEO;

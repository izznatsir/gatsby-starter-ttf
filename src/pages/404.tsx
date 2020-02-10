import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='404: Not found' />
      <main>{/* Main page content here */}</main>
    </Layout>
  );
};

export default IndexPage;

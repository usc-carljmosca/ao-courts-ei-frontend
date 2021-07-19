import React from 'react';
import DocketDetails from '../components/docket-details';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DocketEntry = () => {
  return (
    <Layout>
      <SEO title="Docket Entry" />
      <DocketDetails />
    </Layout>
  );
};

export default DocketEntry;

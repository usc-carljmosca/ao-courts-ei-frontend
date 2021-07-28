import React from 'react';
import Caption from '@components/caption';
import DocketTable from '@components/docket-table';
import CreateCaseBanner from '@components/create-case-banner';
import Layout from '@components/layout';
import SEO from '@components/seo';

const DocketEntry = () => {
  return (
    <Layout>
      <SEO title="Docket Entry" />
      <CreateCaseBanner />
      <div className="grid-container">
        <Caption />
        <DocketTable />
      </div>
    </Layout>
  );
};

export default DocketEntry;

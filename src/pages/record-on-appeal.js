import React from 'react';

import RecordDetails from '@components/record-details';
import Layout from '@components/layout';
import SEO from '@components/seo';

const RecordOnAppeal = () => {
  return (
    <Layout>
      <SEO title="Record On Appeal" />

      <div className="grid-container">
        <ol className="usa-process-list">
          <RecordDetails />
        </ol>
      </div>
    </Layout>
  );
};

export default RecordOnAppeal;

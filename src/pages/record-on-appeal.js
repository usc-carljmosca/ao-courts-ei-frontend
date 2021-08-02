import React from 'react';

import RecordDetails from '@components/record-details';
import Layout from '@components/layout';
import SEO from '@components/seo';
import Caption from '@components/caption';

const RecordOnAppeal = ({ location }) => {
  const isAppellate = location.state && location.state.isAppellate;

  return (
    <Layout>
      <SEO title="Record On Appeal" />

      <div className="grid-container">
        <Caption />
        <h2>Compile Record on Appeal</h2>
        <ol className="usa-process-list">
          <RecordDetails isAppellate={isAppellate} />
        </ol>
      </div>
    </Layout>
  );
};

export default RecordOnAppeal;

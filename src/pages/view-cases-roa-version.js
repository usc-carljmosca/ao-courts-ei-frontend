import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Alert from '../components/alert';
import { Link } from 'gatsby';
import CaseSearch from '../components/case-search';

const ViewCases = () => (
  <Layout>
    <SEO title="View Cases" />
    <div className="grid-container">
      <Alert type="info" heading="New Record on Appeal available to view">
        The Record on Appeal for{' '}
        <Link to="/record-on-appeal/">
          <em>United States v. Carpenter</em>
        </Link>{' '}
        is now available to view.
      </Alert>
      <CaseSearch />
    </div>
  </Layout>
);

export default ViewCases;

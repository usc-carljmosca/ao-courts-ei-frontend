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
      <Alert type="info" heading="Notice of Appeal Filed">
        A notice of appeal has been filed in{' '}
        <Link to="/docket-entry/">
          <em>United States v. Carpenter</em>
        </Link>
      </Alert>
      <CaseSearch />
    </div>
  </Layout>
);

export default ViewCases;

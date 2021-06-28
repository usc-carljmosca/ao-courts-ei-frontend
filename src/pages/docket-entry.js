import React from 'react';
import DocketDetails from '../components/docket-details';
import Layout from '../components/layout';
import SEO from '../components/seo';

const sampleCase = {
  caseNumber: "21-12345",
  leftParties: ["Ray Bradbury"],
  rightParties: ["Charles Bradbury"],
}

const DocketEntry = () => {
  return(
    <Layout>
      <SEO title="Docket Entry" />
      <DocketDetails
        courtCase={sampleCase}
      />
    </Layout>
  )
}

export default DocketEntry;

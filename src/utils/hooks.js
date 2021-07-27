import { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';

const endpoint =
  'https://ao-backend-forgiving-serval-tr.app.cloud.gov/graphql/';

export function useCase(caseId) {
  const [caseData, setCaseData] = useState({ status: 'pending' });

  const query = gql`
        query {
          caseData: case(id: ${caseId}) {
            title
            docketEntries {
              dateFiled
              text
              entryType
            }
          }
        }
        `;

  useEffect(() => {
    const fetchQuery = () => {
      request(endpoint, query)
        .then(
          (d) => setCaseData({ status: 'resolved', data: d }),
          () => setCaseData({ status: 'rejected' })
        )
        .catch((e) => setCaseData({ status: 'error', error: e }));
    };

    fetchQuery();
  }, []);

  return caseData;
}

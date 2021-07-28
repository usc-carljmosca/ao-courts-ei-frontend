import { request, gql } from 'graphql-request';

const endpoint =
  'https://ao-backend-forgiving-serval-tr.app.cloud.gov/graphql/';

export function fetchCaseById(caseId) {
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

  const caseData = request(endpoint, query);

  return caseData;
}

export const API = {
  fetchCaseById,
};

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import reduxProviderWrapper from './src/redux-provider-wrapper';

export const wrapRootElement = reduxProviderWrapper;

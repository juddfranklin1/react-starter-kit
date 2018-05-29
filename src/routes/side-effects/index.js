import React from 'react';
import SideEffects from './SideEffects';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  // const apiKey = '9LvlROpplRry4ZEGvfBnPAi56jgQ7w0GHUUfsUYR';
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{sideEffects{meta,results}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.sideEffects)
    throw new Error('Failed to load the FAERS data.');
  return {
    title: 'FDA Adverse Events Reports',
    chunks: ['side-effects'],
    component: (
      <Layout>
        <SideEffects SideEffects={data} />
      </Layout>
    ),
  };
}

export default action;

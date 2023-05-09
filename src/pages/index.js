import * as React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MenuSection from '../components/MenuSection';

export default function Home() {
  return (
    <Layout>
      <Hero title='Hem trevliga Palermo' subtitle='sub-title' />
      <MenuSection />
    </Layout>
  );
}

import * as React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MenuSection from '../components/MenuSection';
import AboutUsSection from '../components/AboutUsSection';

export default function Home() {
  return (
    <Layout>
      <Hero title='Hem trevliga Palermo' subtitle='sub-title' />
      <MenuSection defaultCategory='pizza' />
      <AboutUsSection />
    </Layout>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <main>
        <div className='flex h-screen justify-center items-center'>
          <div>
            <motion.h1
              className='block text-6xl font-sans font-bold uppercase leading-none'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Typescript
            </motion.h1>
            <motion.h1
              className='block text-6xl font-sans font-bold uppercase leading-none'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Tailwind CSS
            </motion.h1>
            <motion.h1
              className='block text-6xl font-sans font-bold uppercase leading-none'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Framer Motion
            </motion.h1>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

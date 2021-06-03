import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Body> </Body>
      <Footer />
    </Layout>
  );
}

export default App;

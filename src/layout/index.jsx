import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import './index.css';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <div className="background">
          <div className="container">
            <h1 className="section1">Is Guthrie In The Woods?</h1>
            <h2 className="section2">Yes</h2>
          </div>
        </div>
      </div>
    );
  }
}

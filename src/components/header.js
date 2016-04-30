import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header id="siteHeader">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="site-title">
              <Link to="/" className="title">Intervention 911</Link>
              <p>testing crime data</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="top-nav-bar">
              <Link to="/campaign/new">
                <button className="create-campaign-link btn btn-link" type="button">
                  Create Campaign
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

module.exports = Header;

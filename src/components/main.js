import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

class Main extends Component {
  render() {
    return (
      <main className="container main-container">
        <div className="container nav-tabs-container row">
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
              <a href="#link" aria-controls="link" role="tab" data-toggle="tab">Link</a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active tools">
              Data goes here...
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { tools } = state.tools;
  const isFetching = true;

  return { tools, isFetching };
};

export default connect(mapStateToProps)(Main);

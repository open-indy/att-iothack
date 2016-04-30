import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import Header from './components/header.js';
import Footer from './components/footer.js';

class App extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(attemptUserReload());
  }

  render() {
    return (
      <div className="intervention">
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

RJSTApp.contextTypes = {
  router: React.PropTypes.object.isRequired
};

RJSTApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};


export default connect()(RJSTApp);

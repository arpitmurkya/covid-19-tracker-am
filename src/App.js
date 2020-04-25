import React from 'react';

import { connect } from 'react-redux';

// Components
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

// actions
import { fetchData, fetchCountries } from './store/actions/actions';

// Image
import titleImage from './images/image.png';

// CSS
import styles from './App.module.css';
import { FETCH_COUNTRIES_API } from './store/actionConstants';
import { httpFetch } from './utils/http';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchedData: {},
      country: ''
    };
  }

  componentDidMount() {
    this.props.fetchData();
    this.props.fetchCountries();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchedData !== this.props.fetchedData) {
      this.setState({
        fetchedData: this.props.fetchedData
      })
    } else if (prevProps.fetchedCountries !== this.props.fetchedCountries) {
      this.setState({
        fetchedData: this.props.fetchedCountries
      })
    }
  }

  handleCountryChange = (country) => {
    if (country === 'global') {
      this.props.fetchData();
      this.setState({
        country: ''
      })
    }
    else {
      let url = FETCH_COUNTRIES_API + '/' + country;

      httpFetch(url)
        .then((response) => {
          this.setState({
            fetchedData: response,
            country
          });
        }, (error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={titleImage} className={styles.image} alt='COVID-19'/>
        <Cards data={this.state.fetchedData} />
        <CountryPicker handleCountryChange={this.handleCountryChange} data={this.props.countriesList} />
        <Charts data={this.state.fetchedData} country={this.state.country}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fetchedData: state.fetchedData,
  countriesList: state.fetchedCountries
});

const mapDispatchToProps = {
  fetchData,
  fetchCountries
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
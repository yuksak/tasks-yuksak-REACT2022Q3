import React, { Component } from 'react';

import { SearchBar, Cards, Loader } from 'components';
import styles from './index.module.scss';

import { IHomeState, IResult } from 'models';
import { getAllData } from 'api';

class Home extends Component<Record<never, never>, IHomeState> {
  constructor(props: never) {
    super(props);
    this.state = {
      cardData: [],
      searchValue: '',
      errorMessage: '',
      isLoading: false,
      isSubmitted: false,
    };
  }

  fetchCards = async () => {
    this.setState({ isLoading: true });
    const response = await getAllData(this.state.searchValue);

    if (response.error) {
      this.setState({ errorMessage: 'No exact matches found.' });
      this.setState({ cardData: [] });
      this.setState({ isLoading: false });
    }

    if (response.results) {
      const formattedResults = response.results.map((result: IResult) => {
        return {
          id: result.id,
          fullName: result.name,
          gender: result.gender,
          birthday: result.created,
          image: result.image,
          country: result.origin?.name,
          views: 1233,
          likes: 941,
          created: result.created,
        };
      });

      this.setState({ errorMessage: '' });
      this.setState({ cardData: formattedResults });
      this.setState({ isLoading: false });
    }
    // this.setState({ isLoading: false });
    this.setState({ isSubmitted: false });
  };

  componentDidUpdate = (prevProps: never, prevState: IHomeState) => {
    if (this.state.isSubmitted !== prevState.isSubmitted) {
      this.fetchCards();
    }
  };

  componentDidMount = () => {
    this.fetchCards();
  };

  setSearchValue = (searchValue: string) => {
    this.setState({ searchValue });
  };

  setSubmission = (value: boolean) => this.setState({ isSubmitted: value });

  render() {
    return (
      <div className={styles.home} data-testid="home">
        <SearchBar
          setSubmission={this.setSubmission}
          setSearchValue={this.setSearchValue}
          searchValue={this.state.searchValue}
        />

        {this.state.cardData.length !== 0 && !this.state.isLoading ? (
          <Cards cardData={this.state.cardData} />
        ) : (
          <Loader error={this.state.errorMessage} isLoading={this.state.isLoading} />
        )}
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FiHeart, FiEye, FiClock, FiX } from 'react-icons/fi';
import { ItemInterface } from '../../../models';

import styles from './index.module.scss';

interface CardState {
  detailedCard: boolean;
}

class Card extends Component<ItemInterface, CardState> {
  constructor(props: ItemInterface) {
    super(props);
    this.state = {
      detailedCard: false,
    };
  }

  detailedCardOpener = () => {
    this.setState({ detailedCard: true });
  };

  detailedCardCloser = () => {
    this.setState({ detailedCard: false });
  };

  render() {
    return (
      <>
        <div className={styles.card} data-testid="card" onClick={this.detailedCardOpener}>
          <div className={styles.imageBox} data-testid="card-image">
            <img className={styles.image} src={this.props.image} alt="image" />
          </div>
          <div className={styles.body} data-testid="card-body">
            <Link to="#" className={styles.title}>
              {this.props.fullName}
            </Link>
          </div>
        </div>

        {this.state.detailedCard ? (
          <div className={styles.modal} onClick={this.detailedCardCloser}>
            <div
              className={`${styles.card} ${styles.detailedCard}`}
              data-testid="detailed-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.imageBox} data-testid="card-image">
                <img className={styles.image} src={this.props.image} alt="image" />
                <button
                  className={styles.modalCloseButton}
                  onClick={this.detailedCardCloser}
                  data-testid="card-closer"
                >
                  <FiX />
                </button>
              </div>
              <div className={styles.body} data-testid="card-body">
                <Link to="#" className={styles.title}>
                  {this.props.fullName}
                </Link>
                <p className={styles.birthday}>Birthday: {this.props.birthday?.slice(0, 10)}</p>
                <p className={styles.gender}>Gender: {this.props.gender}</p>
                <p className={styles.origin}>Origin: {this.props.country}</p>
              </div>
              <div className={styles.stats} data-testid="card-stats">
                <span>
                  <FiHeart /> {this.props.likes}
                </span>
                <span>
                  <FiEye /> {this.props.views}
                </span>
                <span>
                  <FiClock /> {this.props.created?.slice(0, 10)}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Card;

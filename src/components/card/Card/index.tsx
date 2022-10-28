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

  detailedCardCloser = () => {
    this.setState({ detailedCard: true });
  };

  detailedCardOpener = () => {
    this.setState({ detailedCard: false });
  };

  render() {
    return (
      <>
        <div className={styles.card} data-testid="card" onClick={this.detailedCardCloser}>
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
          <div className={styles.modal}>
            <div className={`${styles.card} ${styles.detailedCard}`} data-testid="detailed-card">
              <div className={styles.imageBox} data-testid="card-image">
                <img className={styles.image} src={this.props.image} alt="image" />
                <button className={styles.modalCloseButton} onClick={this.detailedCardOpener}>
                  <FiX />
                </button>
              </div>
              <div className={styles.body} data-testid="card-body">
                <Link to="#" className={styles.title}>
                  {this.props.fullName}
                </Link>
                <p className={styles.birthday}>Birthday: {this.props.birthday}</p>
                <p className={styles.gender}>Gender: {this.props.gender}</p>
                <p className={styles.category}>Country: {this.props.country}</p>
              </div>
              <div className={styles.stats} data-testid="card-stats">
                <span>
                  <FiHeart /> {this.props.likes}
                </span>
                <span>
                  <FiEye /> {this.props.views}
                </span>
                <span>
                  <FiClock /> {this.props.birthday}
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

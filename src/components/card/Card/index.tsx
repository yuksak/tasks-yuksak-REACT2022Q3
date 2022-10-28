import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FiHeart, FiEye, FiClock } from 'react-icons/fi';
import { ItemInterface } from '../../../models';

import styles from './index.module.scss';

class Card extends Component<ItemInterface> {
  constructor(props: ItemInterface) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card} data-testid="card">
        <div className={styles.imageBox} data-testid="card-image">
          <img className={styles.image} src={this.props.image} alt="image" />
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
    );
  }
}

export default Card;

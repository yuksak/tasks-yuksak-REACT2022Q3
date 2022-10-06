import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FiHeart, FiEye, FiClock } from 'react-icons/fi';
import { ItemInterface } from '../../../models';

import classes from './index.module.scss';

class Card extends Component<ItemInterface> {
  constructor(props: ItemInterface) {
    super(props);
  }
  render() {
    return (
      <div className={classes.card} data-testid="card">
        <div className={classes.card__image} data-testid="card-image">
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={this.props.image}
            alt="image"
          />
        </div>
        <div className={classes.card__body} data-testid="card-body">
          <Link to="#" className={classes.card__title}>
            {this.props.fullName}
          </Link>
          <p className={classes.card__author}>Birthday: {this.props.birthday}</p>
          <p className={classes.card__gender}>Gender: {this.props.gender}</p>
          <p className={classes.card__category}>Country: {this.props.country}</p>
        </div>
        <div className={classes.card__stats} data-testid="card-stats">
          <span className={classes.card__likes}>
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

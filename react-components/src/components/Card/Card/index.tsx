import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FiHeart, FiEye, FiClock } from 'react-icons/fi';
import { ItemInterface } from '../../../models/main';

import classes from './index.module.scss';

class Card extends Component<ItemInterface> {
  constructor(props: ItemInterface) {
    super(props);
    // this.state = { value: '' };
  }
  render() {
    return (
      <div className={classes.card}>
        <div className={classes.card__image}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={this.props.image}
          />
        </div>
        <div className={classes.card__body}>
          <Link to="#" className={classes.card__title}>
            {this.props.title}
          </Link>
          <p className={classes.card__author}>
            by <Link to="#">{this.props.author}</Link>
          </p>
          <p className={classes.card__category}>{this.props.category}</p>
        </div>
        <div className={classes.card__stats}>
          <span className={classes.card__likes}>
            <FiHeart /> {this.props.likes}
          </span>
          <span>
            <FiEye /> {this.props.views}
          </span>
          <span>
            <FiClock /> {this.props.date}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;

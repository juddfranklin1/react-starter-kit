/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Single.css';

class Single extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    const article = this.props.news[this.props.id];
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{article.title}</h1>
          <article key={article.link} className={s.newsItem}>
            <h1 className={s.newsTitle}>
              <a href={article.link}>{article.title}</a>
            </h1>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Single);

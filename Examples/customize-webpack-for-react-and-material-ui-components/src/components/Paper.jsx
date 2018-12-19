import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import '@/assets/components/paper.css';

function Paper(props) {
  const {
    elevation,
    className,
    ...other
  } = props;

  const className2 = classnames(
    'myui-paper',
    'shape',
    'bkc-default',
    className
  );

  return <div className={className2} {...other} />
}

Paper.prototype = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Paper;

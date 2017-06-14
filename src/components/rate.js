// @flow
import React from 'react';
import type { Rates } from '../types';

const Rate = (props: { curr: string, val: number, symbol: string }) => (
  <div>
    <h4>{props.symbol} {props.curr} {props.val}</h4>
  </div>
);

export default Rate;

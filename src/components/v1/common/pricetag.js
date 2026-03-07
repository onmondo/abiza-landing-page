// eslint-disable-next-line no-unused-vars
import React from 'react'

export function PriceTag({ symbol, price, className }) {
  return (
    <blockquote className={className}>
      {symbol}{price}<aside>.00</aside>
    </blockquote>
  )
}
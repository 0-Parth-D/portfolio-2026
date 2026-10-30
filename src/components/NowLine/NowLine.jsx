import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { portfolioData } from '../../data/portfolioData'
import './NowLine.css'

function NowLine({ className = '' }) {
  const { now } = portfolioData
  if (!now?.items?.length) return null

  return (
    <p className={`now-line ${className}`.trim()}>
      <span className="now-line__label mono-text">
        <span className="now-line__dot" aria-hidden="true" />
        Now
        <span className="sr-only"> ({now.updated})</span>
      </span>
      <span className="now-line__text">
        Working on{' '}
        {now.items.map((item, index) => (
          <Fragment key={item.to}>
            {index > 0 && (index === now.items.length - 1 ? ' and ' : ', ')}
            <Link to={item.to} className="now-line__link">
              {item.text}
            </Link>
          </Fragment>
        ))}
        .
      </span>
    </p>
  )
}

export default NowLine

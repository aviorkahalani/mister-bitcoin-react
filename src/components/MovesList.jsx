import React from 'react'
import { formatDistanceToNow } from 'date-fns'

export function MovesList({ title, moves }) {
  return (
    <section className="moves-list">
      <h2>{title}</h2>
      {moves.map((move) => (
        <article key={move._id} className="move my-2 p-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p>
              To <span className="clr-teal fw-bold">{move.to}</span>
            </p>
            <p>
              <span className="fw-bold">
                {formatDistanceToNow(new Date(move.at), { addSuffix: true })}
              </span>
            </p>
          </div>
          <p>
            Amount: <span className="fw-bold">${move.amount}</span>
          </p>
        </article>
      ))}
    </section>
  )
}

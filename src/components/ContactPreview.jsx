import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
  return (
    <article className="contact-preview flex justify-between items-center gap-2">
      <div className="flex items-center gap-1">
        <img
          src={`https://robohash.org/${contact._id}?set=set5`}
          alt=""
          className="contact__img"
        />
        <h3>{contact.name}</h3>
      </div>

      <div className="actions flex gap-1">
        <Link className="btn btn-info" to={`/contact/${contact._id}`}>
          info
        </Link>
        <Link className="btn btn-primary" to={`/contact/edit/${contact._id}`}>
          edit
        </Link>
      </div>
    </article>
  )
}

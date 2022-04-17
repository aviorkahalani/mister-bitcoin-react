import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
  return (
    <article className="contact-preview flex items-center gap-2">
      <img
        src={`https://robohash.org/${contact._id}?set=set5`}
        alt=""
        className="contact__img"
      />
      <h3>{contact.name}</h3>

      <div className="actions">
        <Link to={`/contact/${contact._id}`}>Details</Link>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
      </div>
    </article>
  )
}

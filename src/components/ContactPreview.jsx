export function ContactPreview({ contact, onSelectContact }) {
  return (
    <article
      className="contact-preview flex items-center gap-2"
      onClick={() => onSelectContact(contact._id)}>
      <img
        src={`https://robohash.org/${contact._id}?set=set5`}
        alt=""
        className="contact__img"
      />
      <h3>{contact.name}</h3>
      {/* <pre>{JSON.stringify(contact, null, 2)}</pre> */}
    </article>
  )
}

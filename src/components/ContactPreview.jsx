export function ContactPreview({ contact, onSelectContact }) {
  return (
    <div onClick={() => onSelectContact(contact._id)}>
      <pre>{JSON.stringify(contact, null, 2)}</pre>
    </div>
  )
}

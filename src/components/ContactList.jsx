import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onSelectContact }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactPreview
          key={contact._id}
          contact={contact}
          onSelectContact={onSelectContact}
        />
      ))}
    </div>
  )
}

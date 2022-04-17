import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onSelectContact }) {
  return (
    <div className="py-3 flex flex-col gap-1">
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

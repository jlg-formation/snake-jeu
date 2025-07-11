

const contacts = [
  { name: 'Alice Dupont', phone: '06 12 34 56 78' },
  { name: 'Bob Martin', phone: '07 98 76 54 32' },
  { name: 'Claire Bernard', phone: '06 23 45 67 89' },
  { name: 'David Leroy', phone: '07 11 22 33 44' },
  { name: 'Emma Petit', phone: '06 55 44 33 22' },
];

export default function Contacts() {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <strong>{contact.name}</strong> : {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

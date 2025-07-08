import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from 'react';

import ContactFormDialog from '../components/ContactFormDialog';
import ContactTable from '../components/ContactTable';

export default function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [deleteContact, setDeleteContact] = useState(null);
  
  const toast = useRef(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
    toast.current.show({ severity: 'success', summary: 'Added', detail: 'Contact added' });
  };

  const updateContact = (contact) => {
    setContacts(contacts.map(c => c.id === contact.id ? contact : c));
    toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Contact updated' });
  };

  const confirmDelete = (contact) => {
    setDeleteContact(contact);
  };

  const deleteConfirmed = () => {
    setContacts(contacts.filter(c => c.id !== deleteContact.id));
    toast.current.show({ severity: 'success', summary: 'Deleted', detail: 'Contact deleted' });
    setDeleteContact(null);
  };

  return (
    <div
      className="p-mt-4 p-p-4"
      style={{
        border: '2px solid #90caf9', // blue outline
        borderRadius: '8px',
        maxWidth: '900px',
        margin: '0 auto',
        boxSizing: 'border-box',
        background: 'white',
        overflowX: 'auto' // allow horizontal scroll on small screens if needed
      }}
    >
      <Toast ref={toast} />
      <h2 className="p-text-center" style={{ marginBottom: '1rem' }}>📇 Contact Management</h2>
      <div className="p-d-flex p-jc-center p-mb-3">
        <Button label="Add Contact" icon="pi pi-plus" onClick={() => { setSelectedContact(null); setIsDialogVisible(true); }} />
      </div>

      <ContactTable 
        contacts={contacts}
        onEdit={(contact) => { setSelectedContact(contact); setIsDialogVisible(true); }}
        onDelete={confirmDelete}
      />

      <ContactFormDialog 
        visible={isDialogVisible}
        onHide={() => setIsDialogVisible(false)}
        contact={selectedContact}
        onSave={(contact) => {
          selectedContact ? updateContact(contact) : addContact(contact);
          setIsDialogVisible(false);
        }}
      />

      <ConfirmDialog 
        visible={!!deleteContact} 
        onHide={() => setDeleteContact(null)}
        message={`Are you sure you want to delete ${deleteContact?.name}?`}
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={deleteConfirmed}
        reject={() => setDeleteContact(null)}
      />
    </div>
  );
}

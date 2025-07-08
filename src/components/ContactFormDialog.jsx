import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';

export default function ContactFormDialog({ visible, onHide, contact, onSave }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    setFormData(contact ? contact : { name: '', email: '', phone: '' });
  }, [contact]);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) return;
    onSave(contact ? { ...formData, id: contact.id } : formData);
  };

  return (
    <Dialog header={contact ? "Edit Contact" : "Add Contact"} visible={visible} style={{ width: '30vw' }} modal onHide={onHide}>
      <div className="p-fluid">
        <div className="p-field">
          <label>Name</label>
          <InputText value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="p-field">
          <label>Email</label>
          <InputText value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="p-field">
          <label>Phone</label>
          <InputText value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <Button label="Save" icon="pi pi-check" onClick={handleSubmit} />
      </div>
    </Dialog>
  );
}

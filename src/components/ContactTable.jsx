import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export default function ContactTable({ contacts, onEdit, onDelete }) {
  const actionBody = (rowData) => (
    <>
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-info mr-2" onClick={() => onEdit(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => onDelete(rowData)} />
    </>
  );

  return (
    <DataTable value={contacts} responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone"></Column>
      <Column body={actionBody} header="Actions" style={{ width: '8rem' }}></Column>
    </DataTable>
  );
}

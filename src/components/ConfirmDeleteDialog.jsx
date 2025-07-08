import { ConfirmDialog } from 'primereact/confirmdialog';

export default function ConfirmDeleteDialog({ visible, onHide, message, onAccept }) {
  return (
    <ConfirmDialog 
      visible={visible} 
      onHide={onHide}
      message={message}
      header="Confirmation"
      icon="pi pi-exclamation-triangle"
      accept={onAccept}
      reject={onHide}
    />
  );
}

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

export default function Home() {
  const header = (
    <div className="p-d-flex p-jc-center p-ai-center" style={{ fontSize: '3rem', color: '#2196f3' }}>
      <i className="pi pi-address-book"></i>
    </div>
  );

  return (
    <div
      className="p-d-flex p-jc-center p-ai-center p-flex-column"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
        padding: '2rem'
      }}
    >
      <Card 
        title={<span style={{ fontSize: '2rem', textAlign: 'center', display: 'block' }}>Welcome to Contact App</span>}
        subTitle={<span style={{ textAlign: 'center', display: 'block' }}>Built with React & PrimeReact</span>}
        header={header}
        className="p-shadow-6"
        style={{ width: '100%', maxWidth: '600px' }}
      >
        <p className="p-text-center p-mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Manage your contacts easily.<br/>
          View, add, edit, and delete contacts with a clean, responsive interface.
        </p>
        <div className="p-d-flex p-jc-center">
          <Link to="/contacts">
            <Button
              label="Go to Contact Manager"
              icon="pi pi-arrow-right"
              className="p-button-rounded p-button-info p-button-raised"
              style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
            />
          </Link>
        </div>
      </Card>
    </div>
  );
}

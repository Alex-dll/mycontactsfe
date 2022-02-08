import React from 'react';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/Header/PageHeader';

// import { Container } from './styles';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}

export default NewContact;

import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

// import { Container } from './styles';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}

export default NewContact;

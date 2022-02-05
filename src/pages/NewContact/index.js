import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

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
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>

      <Button>
        Salvar Alterações
      </Button>
      <Button disabled>
        Salvar Alterações
      </Button>
    </>
  );
}

export default NewContact;

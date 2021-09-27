import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}

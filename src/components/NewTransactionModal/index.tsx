import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBoxTransactionType, TransactionTypeContainer } from "./styles";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

enum TransactionTypeEnum {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
}

enum TransactionColorEnum {
    GREEN = "green",
    RED = "red"
}

export function NewTransactionModal({ isOpen, onRequestClose }:INewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar modal"/>    
                </button>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar Transação</h2>

                    <input placeholder="Título"/>

                    <input type="number" placeholder="Valor"/>

                    <TransactionTypeContainer>
                        <RadioBoxTransactionType
                            type="button"
                            isActive={type === TransactionTypeEnum.DEPOSIT}
                            onClick={()=>{ setType(TransactionTypeEnum.DEPOSIT) }}
                            activeColor={TransactionColorEnum.GREEN}
                        >
                            <img src={incomeImg} alt="Entrada"/>
                            <span>Entrada</span>
                        </RadioBoxTransactionType>

                        <RadioBoxTransactionType
                            type="button"
                            isActive={type === TransactionTypeEnum.WITHDRAW}
                            onClick={()=>{ setType(TransactionTypeEnum.WITHDRAW) }}
                            activeColor={TransactionColorEnum.RED}
                        >
                            <img src={outcomeImg} alt="Saida"/>
                            <span>Saída</span>
                        </RadioBoxTransactionType>
                    </TransactionTypeContainer>

                    <input placeholder="Categoria"/>

                    <button type="submit">
                        Cadastrar
                    </button>
                </Container>
        </Modal>
    );
}
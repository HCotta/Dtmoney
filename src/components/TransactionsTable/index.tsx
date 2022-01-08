import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions';
import { formatPrice } from '../../util/format';
import closeImg from '../../assets/close.svg';



export function TransactionsTable() {
  const { transactions, removeTransaction } = useTransactions();

  function handleRemoveTransaction(id: number) {
    removeTransaction(id);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length ? transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatPrice(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <button type="button" onClick={() => handleRemoveTransaction(transaction.id)}>
                  <img src={closeImg} alt='Fechar modal' />
                </button>
              </td>
            </tr>
          ))
            :
            <tr>
              <td colSpan={10} align="center">
                Nenhum registro cadastrado
              </td>
            </tr>
          }
        </tbody>
      </table>
    </Container>
  )
}
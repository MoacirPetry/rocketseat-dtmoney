import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>Desenv Website</td>
              <td className="deposit">R$12.000,00</td>
              <td>Desenv</td>
              <td>20/02/1999</td>
            </tr>
            <tr>
              <td>Desenv Website</td>
              <td className="deposit">R$12.000,00</td>
              <td>Desenv</td>
              <td>20/02/1999</td>
            </tr>
            <tr>
              <td>Desenv Website</td>
              <td className="withdraw">- R$12.000,00</td>
              <td>Desenv</td>
              <td>20/02/1999</td>
            </tr>
          </tbody>
      </table>
    </Container>
  );
}
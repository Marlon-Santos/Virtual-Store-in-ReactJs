import React from "react";
import { Form } from "./style";

export default function cart() {
  return (
    <>
      <Form>
        <div>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-flex-2018-rn-feminino/26/D12-9472-026/D12-9472-026_zoom1.jpg"
            alt="tenis"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>produto</th>
              <th>qtd</th>
              <th>subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                tenis muito massa <div>R$ 129,90</div>
              </td>
              <td>
                <input type="number" />
              </td>
              <td>R$ 129,90</td>
              <td>Lixeira</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <input type="submit" value="finalizar pedido" />
          <div>
            <span>total</span>
            <span>R$1920,28</span>
          </div>
        </footer>
      </Form>
    </>
  );
}

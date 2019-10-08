import React from "react";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from "react-icons/md";

import { Form } from "./style";

export default function cart() {
  return (
    <>
      <Form>
        <table>
          <thead>
            <tr>
              <th />
              <th>produto</th>
              <th>qtd</th>
              <th>subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-flex-2018-rn-feminino/26/D12-9472-026/D12-9472-026_zoom1.jpg"
                    alt="tenis"
                  />
                </div>
              </td>
              <td>
                <div>
                  Tênis muito massa <strong>R$ 129,90</strong>
                </div>
              </td>
              <td>
                <div>
                  <MdAddCircleOutline color={"purple"} size={20} />
                  <input type="number" readOnly value="2" name="qtd" />
                  <MdRemoveCircleOutline color={"purple"} size={20} />
                </div>
              </td>

              <td>R$ 129,90</td>
              <td>
                <MdDelete color={"purple"} size={20} />
              </td>
            </tr>
          </tbody>
        </table>
        <footer>
          <input type="submit" value="finalizar pedido" />
          <div>
            <span>total:</span>
            <strong>R$1920,28</strong>
          </div>
        </footer>
      </Form>
    </>
  );
}

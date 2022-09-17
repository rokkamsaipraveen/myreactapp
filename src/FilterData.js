import React, { Component } from "react";
import { products } from "./data";

class FilterData extends Component {
  render() {
    const filteredData = products.filter((item) => {
      return item.quantity <= 2 ? item : "";
    });
    console.log(filteredData);
    return (
      <div>
        <table border={1}>
          <tr>
            <th>Name of item</th>
            <th>Price of item</th>
            <th>quantity</th>
          </tr>
          {products.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default FilterData;

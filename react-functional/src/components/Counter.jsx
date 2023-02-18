import React from "react";

const Counter = ({
  id,
  productName,
  stock,
  price,
  quantity,
  total,
  handleInc,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={() => handleInc(id)}>+</button>
        <button>-</button>
      </td>
    </tr>
  );
};

export default Counter;

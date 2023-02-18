import React from "react";

const Counter = ({
  id,
  productName,
  stock,
  price,
  quantity,
  total,
  handleInc,
  handleDec,
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
        <button disabled={quantity == stock} onClick={() => handleInc(id)}>
          +
        </button>
        <button disabled={quantity == 0} onClick={() => handleDec(id)}>
          -
        </button>
      </td>
    </tr>
  );
};

export default Counter;

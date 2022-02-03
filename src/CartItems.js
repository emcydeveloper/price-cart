export function CartItems({ cartInfo, setcartInfo }) {
  // console.log(cartInfo);
  return (
    <div className="cart-container">
      <h1>Total items in cart - {cartInfo.length}</h1>
      <table>
        {/* <tr>
              <th>Image</th>
              <th>Index</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr> */}
        {cartInfo.map((cartList, carin) => (
          <tr>
            <td>
              <img
                className="cart-image"
                alt="product"
                src={cartList.proImage}
              ></img>
            </td>
            <td>{cartList.index}</td>
            <td>{cartList.proName}</td>
            <td>{cartList.proPrice}</td>
            <td>
              <button
                onClick={() => {
                  const remaniningList = cartInfo.filter((movie, idx) => {
                    const removePrd = carin;
                    return idx !== removePrd;
                  });
                  setcartInfo(remaniningList);
                }}
              >
                DeletMe!
              </button>
            </td>
          </tr>
          // <DisplayCartItems cartList={itms} />
        ))}
      </table>
    </div>
  );
}

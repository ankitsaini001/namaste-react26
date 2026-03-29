import { useDispatch, useSelector } from "react-redux";
import { RESTRO_IMG_URL } from "../utils/content";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total
  const totalAmount = cartItems.reduce((total, item) => {
    const price =
      item.card.info.price || item.card.info.defaultPrice;
    return total + price / 100;
  }, 0);

  // Clear cart handler
  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-3xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">🛒 Cart</h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty
          </p>
        ) : (
          <>
            {/* Table */}
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Item</th>
                  <th className="p-4 text-left">Price</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => {
                  const info = item.card.info;

                  return (
                    <tr key={index} className="border-b">
                      {/* Image */}
                      <td className="p-4">
                        <img
                          src={
                            info.imageId
                              ? RESTRO_IMG_URL + info.imageId
                              : "https://via.placeholder.com/80"
                          }
                          alt={info.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>

                      {/* Name */}
                      <td className="p-4">{info.name}</td>

                      {/* Price */}
                      <td className="p-4 text-green-600 font-semibold">
                        ₹{(info.price || info.defaultPrice) / 100}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-4">
              
              {/* Clear Cart Button */}
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Clear Cart
              </button>

              {/* Total */}
              <h2 className="bg-white px-5 py-2 rounded shadow font-bold">
                Total: ₹{totalAmount}
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { FaTrash } from "react-icons/fa";
const Cart = () => {
  return (
    <>
      <Navbar />
      <section className="p-5">
        <article className="flex justify-between text-center items-center">
          <h6 className="text-custom-grey w-1/5">Item</h6>
          <h6 className="text-custom-grey w-1/5">Price</h6>
          <h6 className="text-custom-grey w-1/5">Quantity</h6>
          <h6 className="text-custom-grey w-1/5">Subtotal</h6>
          <h6 className="text-custom-grey w-1/6"></h6>
        </article>
        <hr />
        <article className="flex justify-between items-center text-center my-2">
          <div className="flex items-center justify-center w-1/5 h-1/5">
            <img
              className="object-cover aspect-square h-1/4 w-1/4 rounded-lg"
              src="https://www.course-api.com/images/store/product-12.jpeg"
              alt="cart image"
            />
            <h6 className="font-semibold ml-1">Modern</h6>
          </div>
          <div className="w-1/5">
            <h6 className="text-custom-brown">$32890</h6>
          </div>
          <div className="flex items-center justify-center w-1/5 h-min">
            <button className="text-2xl font-bold">-</button>
            <h2 className="font-bold text-xl">1</h2>
            <button className="text-2xl font-bold">+</button>
          </div>
          <div className="w-1/5">
            <h6 className="text-custom-brown">$32890</h6>
          </div>
          <div className="w-1/6">
            <FaTrash className="bg-red-500 text-white text-lg cursor-pointer p-1" />
          </div>
        </article>
        <div className="m-4 text-center">
          <Button label="Clear Shopping Cart" color="bg-red-500" />
        </div>
        <div className="shadow-lg border-2 border-slate-300 p-3 w-1/5">
          <div className="flex justify-between">
            <h6 className="text-custom-grey">Subtotal:</h6>
            <h6 className="text-custom-grey">$3000:</h6>
          </div>
          <hr />
          <div className="flex justify-between my-3">
            <h6 className="text-custom-grey">Shipping fee:</h6>
            <h6 className="text-custom-grey">$3000:</h6>
          </div>
          <div className="flex justify-between my-3">
            <h3 className="font-bold">Order:Total</h3>
            <h3 className="font-bold">$3600</h3>
          </div>

          <Button label="Login" width="w-full" />
        </div>
      </section>
    </>
  );
};
export default Cart;

import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCart from "../components/ProductCart";
import bigShoe1 from "../assets/images/big-shoe1.png";
import { shoes } from "../constants/index";
import Button from "../components/Button";

const SingleProduct = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <>
      <Navbar />
      <section className="flex justify-around py-5">
        <div className="w-1/3 aspect-square border-red-500 border-2">
          <img
            className="object-cover aspect-square"
            src={bigShoeImg}
            alt="Single Product Image"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[4%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe.id}>
                <ProductCart
                  productImg={bigShoeImg}
                  imgURL={shoe.imageURL}
                  changeProductImage={() => {
                    setBigShoeImg(shoe.imageURL);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <article className="w-2/5">
          <h2 className="font-bold text-2xl font-serif">Modern Poster</h2>
          <h5 className="text-custom-brown">$w11</h5>
          <p className="text-custom-grey my-2 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            suscipit repellendus sed rerum quas nostrum ullam, veritatis sequi
            maxime atque nemo voluptate, dolor dicta blanditiis pariatur?
            Repellendus veniam dicta eveniet.
          </p>
          {/* <div className=""> */}
          <div className="flex justify-between  w-1/3 my-2">
            <h6 className="font-semibold ">Available</h6>
            <h6 className="text-custom-grey">In stock</h6>
          </div>
          <div className="flex justify-between  w-1/3 my-2">
            <h6 className="font-semibold">Brand</h6>
            <h6 className="text-custom-grey">Brand</h6>
          </div>
          <div className="flex justify-between w-1/3 my-2">
            <h6 className="font-semibold">Colors</h6>
            <button className="w-5 h-5 bg-black rounded-full"></button>
          </div>
          <div className="controllers flex justify-between w-1/3 my-2">
            <button className="text-2xl font-bold">-</button>
            <h2 className="font-bold text-xl">1</h2>
            <button className="text-2xl font-bold">+</button>
          </div>

          <div className="">
            <Button label="Cart" />
          </div>
        </article>
        {/* </div> */}
      </section>
    </>
  );
};
export default SingleProduct;

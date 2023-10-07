interface Props {
  productImg: string;
  imgURL: string;
  changeProductImage: () => void;
}

const ProductCart = ({ productImg, imgURL, changeProductImage }: Props) => {
  // const handleClick = () => {
  //   if (productImg !== imgURL) {
  //     changeProductImage();
  //   }
  // };
  return (
    <div
      className={`border-2 rounded-xl ${
        productImg === imgURL
      }?'border-red-300':'border-transparent' cursor-pointer max-sm:flex-1`}
      onClick={changeProductImage}
    >
      <div className="flex justify-center items-center shadow-lg bg-center bg-cover sm w-24 sm:w-24 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="product collection"
          className="object-cover aspect-square"
        />
      </div>
    </div>
  );
};

export default ProductCart;

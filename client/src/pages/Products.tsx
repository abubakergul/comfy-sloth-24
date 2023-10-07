import Navbar from "../components/Navbar";

const Products = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-around py-5">
        <div className="w-1/6 border-2 border-red-500 py-3">
          <div className="form-control p-2">
            <input
              type="text"
              placeholder="Search"
              className=" bg-slate-100 border-1 border-slate-200 text-md"
            />
          </div>
          <div className="flex flex-col my-3">
            <div className="form-control p-2 flex flex-col">
              <h2 className="text-md font-bold my-1">Category</h2>
              <button className="text-sm my-1 w-min">All</button>
              <button className="text-sm my-1 w-min">All</button>
              <button className="text-sm my-1 w-min">All</button>
            </div>
          </div>
          <div>
            <div className="form-control p-2">
              <h2 className="text-md font-bold my-1">Company</h2>
              <select name="" id="" className="w-1/4 text-md ">
                <option value="">all</option>
                <option value="">all</option>
                <option value="">all</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control p-2 ">
              <h2 className="text-md font-bold my-1">Colors</h2>
              <div className="flex space-x-2 items-center">
                <button className="text-sm my-1 w-min">All</button>
                <button className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="0.7em"
                    width="0.7em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                </button>

                <button className="w-5 h-5 bg-green-500 rounded-full"></button>
                <button className="w-5 h-5 bg-blue-500 rounded-full"></button>
              </div>
            </div>
          </div>
          <button className="bg-red-700  text-white p-1 m-2 rounded-sm mt-2">
            Clear filter
          </button>
        </div>
        <main className="w-3/4 border-2 border-red-800 f">
          <div className="w-full flex  justify-between flex-wrap">
            <div className="w-1/4 m-1 h-1/4">
              <a href="" className="hover:opacity-80 ">
                <img
                  className="aspect-square rounded-md"
                  src="https://www.course-api.com/images/store/product-12.jpeg"
                  alt=""
                />
              </a>
              <footer className="flex justify-between">
                <h3>Title</h3>
                <h3 className="t text-yellow-800">Price</h3>
              </footer>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Products;

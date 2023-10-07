import Navbar from "../components/Navbar";
import home from "../assets/home.jpeg";
import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-between p-10">
        <article className="w-3/5  ">
          <h1 className="font-bold text-5xl w1/2 mb-4">
            Design Your Comfort Zone
          </h1>
          <p className="w-10/12 mb-4 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Button label="Show Now" />
        </article>
        <article className="w-2/5">
          <img className="w-auto h-[80vh]" src={home} alt="home-page" />
        </article>
      </section>
    </>
  );
};
export default Home;

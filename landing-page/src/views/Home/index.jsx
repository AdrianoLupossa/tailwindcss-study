import Card from "../../components/Card";

const Home = ({ ...otherProps }) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap py-14 justify-center">
        <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
          <Card />
        </div>
        <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
          <Card />
        </div>
        <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;

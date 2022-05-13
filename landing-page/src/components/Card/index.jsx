import photo from "/assets/adem-ay-Tk9m_HP4rgQ-unsplash.jpg";

const Card = (props) => {
  return (
    <div className="bg-white">
      <div>
        <img src={photo} alt="Card Cover" className="w-full" />
      </div>

      <div className="p-2.5">
        <ul>
          <li className="list-none">
            <span className="font-bold text-base">Title</span>
          </li>
        </ul>

        <ul>
          <li className="list-none">
            <span className="text-base">Desc</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

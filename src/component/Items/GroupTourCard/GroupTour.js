import { Link } from "react-router-dom";
import RupiahFormat from "../../../utils/RupiahFormat";

const GroupTour = ({ trip, search }) => {
  console.log(trip);
  return (
    <div>
      <div className="container-fluid container-group  d-flex gap-5 flex-wrap ">
        {trip
          ?.filter((item) => {
            if (
              item?.title.toLowerCase().includes(search?.toLowerCase()) ||
              item?.countries.name
                .toLowerCase()
                .includes(search?.toLowerCase()) ||
              String(item?.price).toLowerCase().includes(search?.toLowerCase())
            ) {
              return item;
            } else if (!search) {
              return item;
            }
          })
          .map((el, i) => {
            return (
              <div key={i} className="container content-container rounded mt-3">
                {el.quota_filled == el.quota ? (
                  <p className="apa ">Sold Out</p>
                ) : (
                  <p className="apa "> {`${el.quota_filled}/${el.quota}`}</p>
                )}

                <Link to={`/detail-trip/${el.id}`}>
                  <img
                    className="rounded"
                    src={trip[i]?.image[0]}
                    alt="japan"
                  ></img>
                </Link>
                <h3>
                  {el.day}D/{el.night}N {el.title}
                </h3>
                <div className="price-container d-flex justify-content-between">
                  <p>IDR. {RupiahFormat(el.price)}</p>
                  <small>{el.countries.name}</small>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GroupTour;

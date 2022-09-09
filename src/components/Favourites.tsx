import IBaby from "../IBaby";

interface FavouritesProps {
    favouritesArray: IBaby[]
}
function Favourites({favouritesArray}:FavouritesProps):JSX.Element {

    const favouriteBabyNames = favouritesArray.map((baby: IBaby) => {
          return (
            <p className={baby.sex === "f" ? "female" : "male"} key={baby.id}>
              {baby.name}
            </p>
          );
        }
      );

    return <section className="favouritesSection">
        <h2 className="favouritesTitle">favourites</h2>
        {favouriteBabyNames}
    </section>
}


export default Favourites;
const Navbaritems = (props) => {
  const filteritems = props.filteritems;
  const categ = props.categ;
  return (
    <div className="Navbaritems">
      {/* {categ.map((eachallcategoy) => {
        return ;
      })} */}
      <button onClick={() => filteritems("All")}>All</button>
      <button onClick={() => filteritems("Shakes")}>Shakes</button>
      <button onClick={() => filteritems("Lunch")}>Lunch</button>
      <button onClick={() => filteritems("breakfast")}>breakfast</button>
    </div>
  );
};

export default Navbaritems;

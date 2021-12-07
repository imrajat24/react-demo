function SideNav({ value, setValue }) {
  return (
    <div className="sideNav">
      <h3>Navigation</h3>
      <p className="nav-item" onClick={() => setValue("name")}>
        Name
      </p>
      <p className="nav-item" onClick={() => setValue("standard")}>
        Standard
      </p>
      <p className="nav-item" onClick={() => setValue("place")}>
        Place
      </p>
    </div>
  );
}

export default SideNav;

import "../stylesheets/Filter.css";

const Filter = (props) => {
  const handleFilterText = (ev) => {
    const inputValue = ev.target.value;
    props.handleFilterText(inputValue);
  };

  const handleSelect = (ev) => {
    const inputSelect = ev.target.value;
    props.handleSelect(inputSelect);
  };

  const handleCheckbox = (ev) => {
    const valueCheckbox = ev.target.value;

    props.handleCheckbox(valueCheckbox);
  };

  return (
    <form className="form">
      <label className="label-text" htmlFor="name">
        ¿So...What do you want to eat today?
      </label>
      <input
        type="text"
        onChange={handleFilterText}
        className="input-text"
      ></input>
      <div className="input-filters">
        <div className="select-box">
          <label>¿How much spicy can you take?</label>
          <select onChange={handleSelect} className="input-select">
            <option value="All">All</option>
            <option value="Like mexican">Like mexican</option>
            <option value="I wanna try but survive">
              I wanna try but survive
            </option>
            <option value="No spice for me">No spice for me</option>
          </select>
        </div>
        <div className="checkbox-box">
          <label>Sort dishes by name</label>
          <input type="checkbox" onClick={handleCheckbox} value={true}></input>
        </div>
      </div>
    </form>
  );
};
Filter.propTypes = {};
export default Filter;

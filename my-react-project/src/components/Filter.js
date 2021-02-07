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
    console.log(valueCheckbox);
  };

  return (
    <form className="mb-1">
      <label className="form__label" htmlFor="name">
        ¿Qué buscas?
      </label>
      <label>¿Qué buscassss?</label>
      <input type="text" onChange={handleFilterText}></input>
      <label>¿Cuál es tu nivel de picanteeee?</label>
      <select onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Like mexican">Like mexican</option>
        <option value="I wanna try but survive">I wanna try but survive</option>
        <option value="No spice for me">No spice for me</option>
      </select>
      <label>Ordenar alfabéticamenteeeee</label>
      <input type="checkbox" onChange={handleCheckbox} value={true}></input>
    </form>
  );
};
Filter.propTypes = {};
export default Filter;

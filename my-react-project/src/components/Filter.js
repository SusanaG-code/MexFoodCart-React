const Filter = (props) => {
  return (
    <form className="mb-1">
      <label className="form__label" htmlFor="name">
        Filtrar por picante:
      </label>
      <label>¿Qué buscas?</label>
      <input type="text"></input>
      <label>¿Cuál es tu nivel de picante?</label>
      <select>
        <option value="Like mexican">Like mexican</option>
        <option value="I wanna try but survive">I wanna try but survive</option>
        <option value="No spice for me">No spice for me</option>
      </select>
      <label>Ordenar alfabéticamenteeeee</label>
      <input type="radio"></input>
    </form>
  );
};
Filter.propTypes = {};
export default Filter;

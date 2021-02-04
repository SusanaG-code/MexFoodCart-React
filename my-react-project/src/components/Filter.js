const Filter = (props) => {
  return (
    <form className="mb-1">
      <label className="form__label" htmlFor="name">
        Filtrar por plato:
      </label>
      <input
        className="form__input-text"
        type="text"
        id="name"
        value={props.filterText}
      />
    </form>
  );
};
Filter.propTypes = {};
export default Filter;

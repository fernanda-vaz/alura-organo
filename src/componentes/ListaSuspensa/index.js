import "./style.css";

const ListaSuspensa = (props) => {
  console.log(props.itens);

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio} value={props.valor}>
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;

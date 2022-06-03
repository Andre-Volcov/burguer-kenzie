import "./style.css";

function Fail({ setModal }) {
  return (
    <section className="fail">
      <section className="fail-inner">
        <div className="fail-header">
          Status
          <button className="fail-button-x" onClick={() => setModal(false)}>
            X
          </button>
        </div>
        <div className="fail-content">
          Este produto já foi adicionado, escolha outro produto
        </div>
      </section>
    </section>
  );
}

export default Fail;

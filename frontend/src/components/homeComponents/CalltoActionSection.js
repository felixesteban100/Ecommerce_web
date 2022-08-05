import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>¿Necesitas más consejos?</h2>
              <p>¡Registrate gratis y obten más consejos!</p>
              <form className="form-section">
                <input placeholder="Tu correo..." name="email" type="email" />
                <input value="Sí, yo quiero!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;

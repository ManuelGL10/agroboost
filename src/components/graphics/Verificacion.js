import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const VerificationPage = () => {
  return (
    <div className="container">
      <Link to="/VerificacionCuenta" className="absolute top-0 left-0 p-4">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <h2>Verificación de Cuenta</h2>
      <form>
        <label htmlFor="codigo">Ingresa el código de verificación:</label><br /><br /><br />
        <input type="text" id="digit1" name="digit1" maxLength="1" required />
        <input type="text" id="digit2" name="digit2" maxLength="1" required />
        <input type="text" id="digit3" name="digit3" maxLength="1" required />
        <input type="text" id="digit4" name="digit4" maxLength="1" required />
        <button type="submit">Verificar</button>
      </form>
    </div>
  );
}

export default VerificationPage;
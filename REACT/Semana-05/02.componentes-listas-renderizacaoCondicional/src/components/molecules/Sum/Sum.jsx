import PropTypes from 'prop-types';

// Não usa PropTypes
export default function Sum1({ numeroA, numeroB }) {
  return <p>{numeroA} + {numeroB} = {numeroA + numeroB}</p>
}


// Usa PropTypes
export function Sum2({ numeroA, numeroB }) {
  return <p>{numeroA} + {numeroB} = {numeroA + numeroB}</p>
}

Sum2.propTypes = {
  numeroA: PropTypes.number.isRequired,
  numeroB: PropTypes.number
}

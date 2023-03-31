export default function Subtraction({ numeroA, numeroB }) {
  return  <p>{numeroA} - {numeroB} = {numeroA - numeroB}</p>
}

Subtraction.defaultProps = {
  numeroA: 0,
  numeroB: 0
}

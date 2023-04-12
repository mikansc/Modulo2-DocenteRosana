import { WelcomeCard, WelcomeCard2, WelcomeCard3 } from '../../molecules'
import { Input, WelcomeMessage } from '../../atoms'


export function Composition() {
  const user = {
    id: 'abc',
    name: 'João',
    age: 20,
  }
  const placeholder = 'Digite seu nome'
  const label = 'João'

  return (
    <section>
      <h2>Composition</h2>

      {/* Prop drilling */}
      <WelcomeCard user={user} placeholder={placeholder} />


      <h3>Podemos usar PROPS para enviar o componente</h3>
      <WelcomeCard2
        mensagemAuxiliar={<WelcomeMessage name={user.name} />}
        inputAuxiliar={<Input placeholder={placeholder} label={label} />}
      />

      <h3>Podemos usar CHILDREN para enviar o componente</h3>
      <WelcomeCard3>
        <WelcomeMessage name={user.name} />
        <Input placeholder={placeholder} label={label} />
      </WelcomeCard3>
    </section>
  );
}

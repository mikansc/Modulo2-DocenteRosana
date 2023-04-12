import { WelcomeCard } from '../../molecules'

export function PropDrilling() {
  const user = {
    id: 1,
    name: 'John Doe',
    age: 30,
  }

  return (
    <section>
      <h2>Prop Drilling</h2>
      <WelcomeCard user={user} />
    </section>
  );
}

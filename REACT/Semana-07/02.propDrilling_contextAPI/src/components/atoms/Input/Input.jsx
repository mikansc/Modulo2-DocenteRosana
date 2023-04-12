import { UserContext } from '../../../contexts/user'

export default function Input() {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <input
        type="text"
        placeholder={user.name}
        />
      )}
    </UserContext.Consumer>
  );
}

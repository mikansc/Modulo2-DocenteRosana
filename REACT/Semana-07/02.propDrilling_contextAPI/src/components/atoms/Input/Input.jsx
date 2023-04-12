import { useContext } from 'react'
import { UserContext, useUser } from '../../../contexts/user'

export default function Input() {
  // const { user } = useContext(UserContext)
  const { user } = useUser()

  return (
    // <UserContext.Consumer>
    //   {({ user }) => (
    //      <input
    //      type="text"
    //      placeholder={user.name}
    //      />
    //   )}
    // </UserContext.Consumer>

    <input
      type="text"
      placeholder={user.name}
    />
  );
}

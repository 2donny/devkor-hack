import { useState } from 'react';

export const TOKEN = 'TOKEN';

export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem(TOKEN)),
  );

  const toggleLogInOut = (token: string | undefined) => {};

  return [isLoggedIn, toggleLogInOut];
}

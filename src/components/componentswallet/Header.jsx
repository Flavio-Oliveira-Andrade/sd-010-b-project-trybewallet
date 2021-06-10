import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const emailUser = useSelector((state) => state.user.email);

  console.log(emailUser);

  return (
    <div>
      <p>{ emailUser }</p>
    </div>
  );
}

export default Header;

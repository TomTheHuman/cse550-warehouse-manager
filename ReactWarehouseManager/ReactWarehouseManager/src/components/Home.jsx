import React, { useEffect } from 'react';

export default function Inventory(props) {
  useEffect(() => {
    const { user, navigate, setTitle } = props;
    console.log(user);
    setTitle('Home');
    if (!user || user.type !== 'admin') {
      navigate('/404');
    }
  }, [props]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

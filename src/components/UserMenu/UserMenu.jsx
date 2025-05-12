import React from 'react'
import { logoutThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsloggetIn, selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsloggetIn);
     const dispatch = useDispatch();
  return (
    <>
      {isLoggedIn && <h2 className="text-3xl">{user.name}</h2>}
    {isLoggedIn && (
              <button
                onClick={() => dispatch(logoutThunk())}
                className="btn btn-secondary"
                type="button"
              >
                Logout
              </button>
              )}
            </>
  )
}

export default UserMenu
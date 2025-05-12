import React from 'react'
import { logoutThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
     const dispatch = useDispatch();
  return (
    <>
              <button
                onClick={() => dispatch(logoutThunk())}
                className="btn btn-secondary"
                type="button"
              >
                Logout
              </button>
            </>
  )
}

export default UserMenu
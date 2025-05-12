import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchContactsData } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import ContactsItem from "./pages/contactsItem/ContactsItem";
import Layout from "./components/Layout/Layout";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivedRoute from "./components/PrivedRoute/PrivedRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
//
//
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivedRoute>
                <ContactsItem />
              </PrivedRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

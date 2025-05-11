import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchContactsData } from "./redux/contacts/contactsOps";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import NotFound from "./pages/notFound/notFound";
import ContactsItem from "./pages/contactsItem/ContactsItem";

import Layout from "./components/Layout/Layout";
//
//
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactsItem />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

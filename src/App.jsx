import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchContactsData } from "./redux/contacts/contactsOps";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import NotFound from "./pages/notFound/notFound";
import ContactsItem from "./pages/contactsItem/ContactsItem";
import Header from "./components/Header/Header";

//
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<ContactsItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

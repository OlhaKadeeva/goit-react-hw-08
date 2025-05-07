import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routers/PrivateRoute";
import { RestrictedRoute } from "./routers/RestrictedRoute";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactsPage from "./pages/ContactsPage";

import "./App.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchContacts } from "../src/redux/contactsOps";
// import ContactList from "../src/components/ContactList/ContactList";
// import ContactForm from "../src/components/ContactForm/ContactForm";
// import SearchBox from "../src/components/SearchBox/SearchBox";

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

// export default App;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

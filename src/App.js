import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router";
import JoinForm from "./components/JForm";

const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <Navbar />
                <Homepage />
                <Aboutpage />
                <ContactUs />
                <Footer />
              </>
            );
          }}
        />
        <Route path="/join-bb" component={JoinForm} />
      </Switch>
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLogin } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

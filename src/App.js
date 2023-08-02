import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./About";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav />
      <DataProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route exact path="/edit/:id" component={EditPost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;

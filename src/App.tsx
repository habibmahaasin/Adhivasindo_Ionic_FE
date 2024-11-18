import { setupIonicReact } from "@ionic/react";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import { AuthProvider } from "@utils/context/auth.context";
import PrivateRoute from "@components/privateRoute";
import MainLayout from "@components/Layouts/main.layout";
import CompetencyModulePage from "./pages/competencyModule";

setupIonicReact();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <MainLayout>
            <PrivateRoute path="/" exact component={IndexPage} />
            <PrivateRoute
              path="/competency-module"
              component={CompetencyModulePage}
            />
          </MainLayout>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

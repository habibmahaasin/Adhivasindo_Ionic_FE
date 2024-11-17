// src/App.tsx
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
import { useEffect, useState } from "react";
import LearningModuleService from "./services/learningModule";
import { LearningModule } from "./types/learningModule";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import { AuthProvider } from "@utils/context/auth.context";
import PrivateRoute from "@components/privateRoute";
setupIonicReact();

const App: React.FC = () => {
  const [learningModules, setLearningModules] = useState<LearningModule[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchLearningModules = async () => {
      try {
        const response = await LearningModuleService.getLearningModules();
        setLearningModules(response.data.data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchLearningModules();
  }, []);

  console.log("learningModules", learningModules);

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

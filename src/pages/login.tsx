import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonButton,
  IonItem,
  IonToast,
} from "@ionic/react";
import { useAuth } from "../utils/context/auth.context";
import { User } from "../types/user";
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const { login, loading, error, isAuthenticated } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setToastMessage("Please fill in both fields");
      setShowToast(true);
      return;
    }

    try {
      await login({ email, password } as User);
      setToastMessage("Login successful!");
      setShowToast(true);
    } catch (err) {
      setToastMessage(error || "An error occurred during login");
      setShowToast(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <IonCard className="w-[500px]">
        <IonCardHeader>
          <IonCardTitle>Login Page</IonCardTitle>
          <IonCardSubtitle>
            Login to your account to access more features
          </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent className="flex flex-col gap-2">
          <IonItem>
            <IonInput
              label="Email"
              type="email"
              value={email}
              placeholder="email@domain.com"
              labelPlacement="floating"
              onIonInput={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Password"
              type="password"
              value={password}
              placeholder="password"
              labelPlacement="floating"
              onIonInput={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton expand="full" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </IonButton>
        </IonCardContent>
      </IonCard>

      <IonToast
        isOpen={showToast}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => setShowToast(false)}
      />
    </div>
  );
};

export default LoginPage;

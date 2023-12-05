import React from "react";
import { SafeAreaView } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks";


const Account = () => {
  const { username } = useAuth();
  return (
    <SafeAreaView>
      {Object.keys(username).length ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
};

export default Account;

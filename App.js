import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Button,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation.component";
import { default as theme } from "./custom-theme.json";
import { CommonContextProvider } from "./context/CommonContext";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

export default () => (
  <Provider store={Store}>
    <CommonContextProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
      >
        <AppNavigator />
      </ApplicationProvider>
    </CommonContextProvider>
  </Provider>
);

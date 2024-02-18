import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { ControlPanel } from "./src/screens/ControlPanel";
import { THEME } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
        <ControlPanel />
    </NativeBaseProvider>
  );
}

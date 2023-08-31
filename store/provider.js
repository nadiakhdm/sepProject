"use client";

import {persistStore} from "redux-persist";

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { store } from ".";

let persistor = persistStore(store);
export function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}

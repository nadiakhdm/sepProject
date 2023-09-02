import {createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "@/reducer/combiner";

const persistConfig = {
  key: "sep-app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export {store, persistor};

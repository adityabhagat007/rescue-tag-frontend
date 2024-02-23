import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
export default function AppContainer() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  );
}

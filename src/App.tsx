import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomeComponent from "./pages/home/home.component";

function App() {
   const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <HomeComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

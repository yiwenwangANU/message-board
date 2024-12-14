import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import MessageCard from "./components/MessageCard";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <MessageCard />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;

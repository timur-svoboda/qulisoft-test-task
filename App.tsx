import { Provider as ReduxProvider } from "react-redux";
import { store } from "@qulisoft-test-task/data-store";
import { Navigation } from "@qulisoft-test-task/feat-navigation";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
}

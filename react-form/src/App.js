import "./App.css";
import ContactForm from "./components/ContactForm";
import DynamicForm from "./components/DynamicForm";

function App() {
  return (
    <div className="App">
      <DynamicForm />
      <ContactForm />
    </div>
  );
}

export default App;

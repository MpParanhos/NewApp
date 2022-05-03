/* interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-600 px-4 h-10 rounded hover:bg-violet-800 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}

export default App */

import { Widget } from "./components/Widget";

export function App() {
  return <Widget />
}

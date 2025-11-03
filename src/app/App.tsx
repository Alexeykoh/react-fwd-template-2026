import { RouterProvider, ReduxProvider } from '@app/providers';

function App() {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
}

export default App;

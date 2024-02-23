import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <main>
        <h1>The beast got away! Try looking on another page!</h1>
      </main>
    </>
  );
}

export default ErrorPage;
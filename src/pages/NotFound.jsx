import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      description="Page Not Found"
      image="https://via.placeholder.com/300"
    />
  );
}
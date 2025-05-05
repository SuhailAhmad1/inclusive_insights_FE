import Footer from "../../components/Footer";

export default function ErrorPage() {
  return (
    <div className="h-screen">
      <div
        className="text-center bg-black text-white flex items-center justify-center flex-col h-full"
      >
        <h2 className="text-5xl text-red-500">404</h2>
        <p className="text-3xl">Could not find this page</p>
      </div>
    </div>
  );
}

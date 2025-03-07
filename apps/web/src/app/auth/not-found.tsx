import BackToAuth from "@/components/pages/auth/Notfound/BackToAuth";
import NotFoundSVG from "@/components/pages/auth/Notfound/NotFoundSVG";
import "@/styles/auth/NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <NotFoundSVG />
        <div className="text-center">
          <h1 className="notfound-text">URL Invalid or Expired</h1>
          <BackToAuth />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

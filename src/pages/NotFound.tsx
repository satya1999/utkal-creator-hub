import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Utkal Creator Hub";
  }, []);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="text-center">
        <h1 className="mb-2 text-7xl font-extrabold text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;

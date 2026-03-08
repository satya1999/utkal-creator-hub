import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Utkal Creator Hub";
  }, []);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="grid-pattern absolute inset-0" />
      <div className="relative text-center">
        <h1 className="mb-2 text-8xl font-black text-gradient">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">This page doesn't exist.</p>
        <Button asChild className="rounded-full">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;

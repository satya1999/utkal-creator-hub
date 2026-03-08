import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { AnimatePresence, motion } from "framer-motion";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 5) setShow(true);
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-background p-8 shadow-2xl"
          >
            <button onClick={close} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-2 text-2xl font-bold text-foreground">Before you go! 👋</h3>
            <p className="mb-6 text-muted-foreground">
              Get a <span className="font-semibold text-primary">free 15-minute marketing audit</span> for your
              business. No strings attached — just actionable advice.
            </p>
            <Button asChild size="lg" className="w-full text-base font-semibold">
              <a
                href={getWhatsAppLink("Hi! I'd like to claim my free 15-minute marketing audit.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim Your Free Audit →
              </a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We only take 5 new clients per month
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;

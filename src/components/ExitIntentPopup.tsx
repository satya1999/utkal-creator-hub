import { useEffect, useState } from "react";
import { X, ArrowRight, ArrowLeft, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [step, setStep] = useState<"intro" | "form">("intro");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
    setStep("intro");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Open Google Calendar scheduling link
    window.open(GOOGLE_CALENDAR_URL, "_blank", "noopener,noreferrer");
    toast.success("Opening calendar — book your free audit slot!");
    close();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              {step === "intro" ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="mb-2 text-2xl font-black text-foreground">
                    Before you go! 👋
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Get a{" "}
                    <span className="font-semibold text-primary">
                      free 15-minute marketing audit
                    </span>{" "}
                    for your business. No strings attached.
                  </p>
                  <Button
                    size="lg"
                    className="w-full rounded-full text-base font-bold"
                    onClick={() => setStep("form")}
                  >
                    Claim Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    We only take 5 new clients per month
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <button
                    onClick={() => setStep("intro")}
                    className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="mr-1 h-3.5 w-3.5" /> Back
                  </button>

                  <div className="mb-1 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      Book Your Free Audit
                    </h3>
                  </div>
                  <p className="mb-5 text-sm text-muted-foreground">
                    Enter your details & we'll open the calendar to pick a slot.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={100}
                      className="h-11 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        className="h-11 rounded-xl border-border bg-background pl-9 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full text-base font-bold"
                    >
                      Schedule Meeting <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </form>

                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    🔒 Your info is safe. No spam, ever.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;

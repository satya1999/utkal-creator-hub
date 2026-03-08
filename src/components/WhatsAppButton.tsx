import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,49%)] text-primary-foreground shadow-xl shadow-[hsl(142,70%,49%)/0.3]"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="h-7 w-7" />
  </motion.a>
);

export default WhatsAppButton;

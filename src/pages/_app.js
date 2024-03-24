import AppLayout from "@/components/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "use-shopping-cart";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  return (
    <CartProvider cartMode="checkout-session" stripe={stripeKey} currency="INR">
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
      </AppLayout>
    </CartProvider>
  );
}

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here"); // replace with your Stripe publishable key

export default function Payment() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_id_here", // replace with actual Stripe price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: window.location.origin + "/success",
      cancelUrl: window.location.origin + "/cancel",
    });

    if (error) {
      console.error("Stripe checkout error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Complete Your Payment</h2>
      <p className="mb-4">
        Click below to proceed securely with Stripe Checkout.
      </p>
      <button
        onClick={handleCheckout}
        className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg text-white font-semibold shadow transition duration-200"
      >
        Proceed to Payment
      </button>
    </div>
  );
}

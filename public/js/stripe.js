import axios from "axios";
import { showAlert } from "./alerts";

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe("pk_test_2xLrwsnp9RvSk3ymLUOJt5wt");
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    // console.log(err);
    showAlert("error", err);
  }
};

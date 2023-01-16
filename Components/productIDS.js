import { checkout } from "./checkout.js";

export function productsIds(tshirt) {
  if (tshirt === "black") {
    checkout({
      lineItems: [
        {
          price: "price_1MJH66SIUtlkQfBLFfr3c6dN",
          quantity: 1,
        },
      ],
    });
  } else if (tshirt === "blue") {
    checkout({
      lineItems: [
        {
          price: "price_1MJH1XSIUtlkQfBLB1qf0xrD",
          quantity: 1,
        },
      ],
    });
  } else {
    checkout({
      lineItems: [
        {
          price: "price_1MJH7YSIUtlkQfBLFF7qEscE",
          quantity: 1,
        },
      ],
    });
  }
}

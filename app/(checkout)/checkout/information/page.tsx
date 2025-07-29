import FormPlaceHolder from "components/checkout/place-holder";
import { getCountryList } from "lib/odoo";
import { Metadata } from "next";
import GuestCheckOutForm from "~components/checkout/information/checkout-form";
import { Suspense } from "react";

export default async function Information() {
  let countryList = null;
  try {
    countryList = await getCountryList();
  } catch (error) {
    console.error("Error fetching country list:", error);
    // Handle the error appropriately, e.g., set a default value or rethrow
    countryList = null;
  }
  return (
    <Suspense fallback={<FormPlaceHolder />}>
      <GuestCheckOutForm countries={countryList} />
    </Suspense>
  );
}
export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout with store items",
};

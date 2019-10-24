import * as Yup from "yup";

export default Yup.object().shape({
  count: Yup.number()
    .max(10, "Maximum 10 Listings")
    .min(1, "Minimum 1 Listing")
});

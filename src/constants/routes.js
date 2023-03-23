import { Contact } from "../pages/contact/Contact";
import { Faq } from "../pages/faq/Faq";
import { Home } from "../pages/home/Home";
import { Partners } from "../pages/partners/Partners";
import { PropertyFraud } from "../pages/propertyFraud/PropertyFraud";
import {
  CONTACT_PAGE_PATH,
  FAQ_PAGE_PATH,
  HOME_PAGE_PATH,
  PARTNERS_PAGE_PATH,
  PROPERTY_PAGE_PATH,
} from "./paths";

export const routes = [
  { exact: true, path: HOME_PAGE_PATH, element: <Home />, title: "Home" },
  {
    path: PROPERTY_PAGE_PATH,
    element: <PropertyFraud />,
    title: "Property Fraud",
  },
  { path: PARTNERS_PAGE_PATH, element: <Partners />, title: "Partners" },
  { path: FAQ_PAGE_PATH, element: <Faq />, title: "FAQ" },
  { path: CONTACT_PAGE_PATH, element: <Contact />, title: "Contact" },
];

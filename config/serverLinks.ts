import type { ServerLinks } from "@/types/ServerLinks";
import { v4 as uuid } from "uuid";

const serverLinks: ServerLinks = [
  {
    id: uuid(),
    component: "server landing page",
    link: "https://raspi.thepmsquare.com/",
  },
  {
    id: uuid(),
    component: "pgadmin",
    link: "http://raspi.thepmsquare.com:10101/",
  },
  {
    id: uuid(),
    component: "square_common_bl",
    link: "https://raspi.thepmsquare.com:10110/docs/",
  },
];

export default serverLinks;

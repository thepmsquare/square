import type { ServerLinks } from "@/types/ServerLinks";

const serverLinks: ServerLinks = [
  {
    id: "server landing page",
    component: "server landing page",
    link: "https://raspi.thepmsquare.com/",
  },
  {
    id: "pgadmin",
    component: "pgadmin",
    link: "https://db.thepmsquare.com/",
  },
  {
    id: "square_common_bl",
    component: "square_common_bl",
    link: "https://raspi.thepmsquare.com:10110/docs/",
  },
  {
    id: "square_administration",
    component: "square_administration",
    link: "https://raspi.thepmsquare.com:10111/docs/",
  },
];

export default serverLinks;

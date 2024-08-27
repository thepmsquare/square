import type { ServerLinks } from "@/types/ServerLinks";
import { v4 as uuid } from "uuid";

const serverLinks: ServerLinks = [
  { id: uuid(), component: "server landing page", link: "https://localhost/" },
  { id: uuid(), component: "pgadmin", link: "http://localhost:10101/" },
  {
    id: uuid(),
    component: "lapa_database",
    link: "https://localhost:10010/docs/",
  },
  {
    id: uuid(),
    component: "lapa_authentication",
    link: "https://localhost:10011/docs/",
  },
  {
    id: uuid(),
    component: "lapa_file_store",
    link: "https://localhost:10100/docs/",
  },
];

export default serverLinks;

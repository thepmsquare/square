import React, { Key } from "react";
import { ServerLink } from "@/types/ServerLinks";
import {
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import serverLinks from "@/config/serverLinks";

export default function ServerLinksTable() {
  const serverLinksColumns = [
    {
      field: "component",
      headerName: "component",
    },
    {
      field: "link",
      headerName: "link",
    },
  ];

  const getCellValueForServerLinks = (item: ServerLink, key: Key) => {
    if (key === "component") {
      return <>{item.component}</>;
    } else if (key === "link") {
      return (
        <Button
          href={item.link}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          target="_blank"
          size="sm"
        >
          open
        </Button>
      );
    } else {
      console.error(
        `Invalid values in getCellValueForServerLinks: item: ${item}, key: ${key}.`,
      );
      return <>unknown error</>;
    }
  };

  return (
    <Table aria-label="Table with server links" className="m-4 w-full">
      <TableHeader columns={serverLinksColumns}>
        {(column) => (
          <TableColumn key={column.field}>{column.headerName}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={serverLinks}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {getCellValueForServerLinks(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

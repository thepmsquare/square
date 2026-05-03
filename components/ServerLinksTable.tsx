import React, { Key } from "react";
import { ServerLink } from "@/types/ServerLinks";
import {
  Button,
  Table,
} from "@heroui/react";
import { ExternalLink, Layers } from "lucide-react";

import serverLinks from "@/config/serverLinks";

export default function ServerLinksTable() {
  const serverLinksColumns = [
    {
      key: "component",
      headerName: "component",
    },
    {
      key: "link",
      headerName: "action",
    },
  ];

  const renderCell = (item: ServerLink, columnKey: Key) => {
    switch (columnKey) {
      case "component":
        return (
          <div className="flex items-center gap-2 py-2">
            <Layers className="h-4 w-4 text-primary opacity-70" />
            <span className="font-medium text-foreground">{item.component.toLowerCase()}</span>
          </div>
        );
      case "link":
        return (
          <Button
            onPress={() => window.open(item.link, "_blank")}
            variant="flat"
            color="primary"
            size="sm"
          >
            <div className="flex items-center gap-1">
              <ExternalLink className="h-3 w-3" />
              open
            </div>
          </Button>
        );
      default:
        return <span>-</span>;
    }
  };

  return (
    <div className="p-1">
      <Table
        aria-label="server links table"
        shadow="none"
        className="w-full"
      >
        <Table.ScrollContainer>
          <Table.Content aria-label="server links content">
            <Table.Header>
              <Table.Column isRowHeader className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
                component
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
                action
              </Table.Column>
            </Table.Header>
            <Table.Body items={serverLinks}>
              {(item) => (
                <Table.Row key={item.id}>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "component")}
                  </Table.Cell>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "link")}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}

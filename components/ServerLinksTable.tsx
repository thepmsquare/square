"use client";
import { ExternalLink } from "lucide-react";
import React, { Key } from "react";

import serverLinks from "@/config/serverLinks";
import { ServerLink } from "@/types/ServerLinks";
import { Button, Table, Tooltip } from "@heroui/react";

export default function ServerLinksTable() {
  const renderCell = (item: ServerLink, columnKey: Key) => {
    switch (columnKey) {
      case "component":
        return (
          <span className="font-medium text-foreground">
            {item.component.toLowerCase()}
          </span>
        );
      case "link":
        return (
          <Tooltip>
            <Tooltip.Trigger>
              <Button
                onPress={() => window.open(item.link, "_blank")}
                variant="secondary"
                isIconOnly
              >
                <div className="flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                </div>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content className="bg-content1 border border-divider p-2 rounded shadow-lg text-xs">
              open link
            </Tooltip.Content>
          </Tooltip>
        );
      default:
        return <span>-</span>;
    }
  };

  return (
    <div className="p-1">
      <Table aria-label="server links table" className="w-full">
        <Table.ScrollContainer>
          <Table.Content aria-label="server links content">
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-transparent text-default-500 font-medium tracking-wider"
              >
                component
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium tracking-wider text-right">
                link
              </Table.Column>
            </Table.Header>
            <Table.Body items={serverLinks}>
              {(item) => (
                <Table.Row key={item.id}>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "component")}
                  </Table.Cell>
                  <Table.Cell className="border-b border-divider/50 text-right">
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

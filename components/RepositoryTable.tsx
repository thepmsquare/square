"use client";
import { Code2, ExternalLink, Lock } from "lucide-react";
import React, { Key, useEffect, useState } from "react";

import repositories from "@/config/repositories";
import { Button, Skeleton, Table, Tooltip } from "@heroui/react";

import type { Repositories, Repository } from "@/types/Repositories";
export default function RepositoryTable() {
  const [displayRepos, changeDisplayRepos] = useState<Repositories | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);

  const getVersionNumbers = async () => {
    setLoading(true);
    changeDisplayRepos(repositories);

    const repositoriesClone: Repositories = structuredClone(repositories);
    repositoriesClone.forEach((repo) => {
      repo.latestVersion.version = "";
    });

    const versionPromises = repositoriesClone.map(async (repo) => {
      const { type, linkToFetchVersion } = repo.latestVersion;

      if (type !== "pip" && type !== "npm") return repo;

      try {
        const response = await fetch(linkToFetchVersion);
        const data = await response.json();

        repo.latestVersion.version =
          type === "pip" ? data.info.version : data["dist-tags"].latest;
      } catch (error) {
        console.log(error);
        repo.latestVersion.version = "n/a";
      }

      return repo;
    });

    const updatedRepos = await Promise.all(versionPromises);
    changeDisplayRepos(updatedRepos);
    setLoading(false);
  };

  useEffect(() => {
    getVersionNumbers();
  }, []);

  const renderCell = (item: Repository, columnKey: Key) => {
    switch (columnKey) {
      case "repoName":
        return (
          <div className="flex flex-col gap-1 py-2">
            <span className="text-foreground">{item.repoName}</span>
          </div>
        );
      case "latestVersion":
        return item.latestVersion.type !== "empty" ? (
          <Tooltip>
            <Tooltip.Trigger>
              <Button
                onPress={() =>
                  window.open(item.latestVersion.publicLink, "_blank")
                }
                variant="primary"
                size="sm"
              >
                {item.latestVersion.version || "loading"}
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content className="bg-content1 border border-divider p-2 rounded shadow-lg text-xs">
              view on registry
            </Tooltip.Content>
          </Tooltip>
        ) : (
          <></>
        );
      case "sourceCodeLink":
        return (
          <div className="flex items-center gap-2">
            <Tooltip>
              <Tooltip.Trigger>
                <Button
                  onPress={() =>
                    window.open(item.sourceCodeLink.value, "_blank")
                  }
                  variant={
                    item.sourceCodeLink.isPrivate ? "danger-soft" : "secondary"
                  }
                  size="sm"
                  isIconOnly
                >
                  {item.sourceCodeLink.isPrivate ? (
                    <Lock className="h-3.5 w-3.5" />
                  ) : (
                    <Code2 className="h-3.5 w-3.5" />
                  )}
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content className="bg-content1 border border-divider p-2 rounded shadow-lg text-xs">
                open source code
              </Tooltip.Content>
            </Tooltip>
          </div>
        );
      case "previewLink":
        return item.previewLink ? (
          <Tooltip>
            <Tooltip.Trigger>
              <Button
                onPress={() => window.open(item.previewLink!, "_blank")}
                variant="secondary"
                isIconOnly
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content className="bg-content1 border border-divider p-2 rounded shadow-lg text-xs">
              open preview
            </Tooltip.Content>
          </Tooltip>
        ) : (
          <></>
        );
      case "programmingLanguage":
        return item.programmingLanguage.toLowerCase();
      default:
        return <span>-</span>;
    }
  };

  if (loading && !displayRepos) {
    return (
      <div className="flex flex-col gap-4 p-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-1 ">
      <Table aria-label="repository links table" className="min-w-[600px]">
        <Table.ScrollContainer>
          <Table.Content aria-label="repository links content">
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-transparent text-default-500 font-medium tracking-wider"
              >
                repository
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium tracking-wider">
                version
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium tracking-wider">
                source
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium tracking-wider">
                preview
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium tracking-wider">
                language
              </Table.Column>
            </Table.Header>
            <Table.Body items={displayRepos || []}>
              {(item) => (
                <Table.Row key={item.id}>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "repoName")}
                  </Table.Cell>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "latestVersion")}
                  </Table.Cell>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "sourceCodeLink")}
                  </Table.Cell>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "previewLink")}
                  </Table.Cell>
                  <Table.Cell className="border-b border-divider/50">
                    {renderCell(item, "programmingLanguage")}
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

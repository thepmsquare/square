import React, { Key, useEffect, useState } from "react";
import type { Repositories, Repository } from "@/types/Repositories";
import {
  Button,
  Spinner,
  Table,
  Chip,
  Skeleton,
  Tooltip,
} from "@heroui/react";
import { ExternalLink, Code2, Lock, Unlock, GitBranch } from "lucide-react";

import repositories from "@/config/repositories";

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

  const repoTableColumns = [
    {
      key: "repoName",
      headerName: "repository",
    },
    {
      key: "latestVersion",
      headerName: "version",
    },
    {
      key: "sourceCodeLink",
      headerName: "source",
    },
    {
      key: "previewLink",
      headerName: "preview",
    },
    {
      key: "programmingLanguage",
      headerName: "language",
    },
  ];

  const getLanguageColor = (lang: string) => {
    const l = lang.toLowerCase();
    if (l.includes("python")) return "primary";
    if (l.includes("javascript") || l.includes("js")) return "warning";
    if (l.includes("typescript") || l.includes("ts")) return "secondary";
    if (l.includes("docker")) return "info";
    return "default";
  };

  const renderCell = (item: Repository, columnKey: Key) => {
    switch (columnKey) {
      case "repoName":
        return (
          <div className="flex flex-col gap-1 py-2">
            <span className="font-semibold text-foreground">{item.repoName}</span>
          </div>
        );
      case "latestVersion":
        return item.latestVersion.type !== "empty" ? (
          <Tooltip content="view on registry">
            <Button
              onPress={() => window.open(item.latestVersion.publicLink, "_blank")}
              variant="flat"
              size="sm"
              color="primary"
              className="font-mono text-xs"
              isLoading={item.latestVersion.version === ""}
            >
              {item.latestVersion.version || "loading"}
            </Button>
          </Tooltip>
        ) : (
          <span className="text-default-400 text-xs italic">no release</span>
        );
      case "sourceCodeLink":
        return (
          <div className="flex items-center gap-2">
            <Button
              onPress={() => window.open(item.sourceCodeLink.value, "_blank")}
              variant={item.sourceCodeLink.isPrivate ? "bordered" : "flat"}
              color={item.sourceCodeLink.isPrivate ? "default" : "secondary"}
              size="sm"
              isIconOnly
            >
              {item.sourceCodeLink.isPrivate ? (
                <Lock className="h-3.5 w-3.5" />
              ) : (
                <Code2 className="h-3.5 w-3.5" />
              )}
            </Button>
            <span className="hidden text-[10px] sm:inline opacity-60">
              {item.sourceCodeLink.isPrivate ? "private" : "public"}
            </span>
          </div>
        );
      case "previewLink":
        return item.previewLink ? (
          <Button
            onPress={() => window.open(item.previewLink!, "_blank")}
            variant="flat"
            color="success"
            size="sm"
            isIconOnly
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        ) : (
          <span className="text-default-300">-</span>
        );
      case "programmingLanguage":
        return (
          <Chip
            size="sm"
            variant="dot"
            color={getLanguageColor(item.programmingLanguage) as any}
            className="border-none bg-transparent px-0"
          >
            {item.programmingLanguage.toLowerCase()}
          </Chip>
        );
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
    <div className="overflow-x-auto p-1">
      <Table
        aria-label="repository links table"
        shadow="none"
        layout="fixed"
        className="min-w-[600px]"
      >
        <Table.ScrollContainer>
          <Table.Content aria-label="repository links content">
            <Table.Header>
              <Table.Column isRowHeader className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
                repository
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
                version
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
                source
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
                preview
              </Table.Column>
              <Table.Column className="bg-transparent text-default-500 font-medium text-[10px] tracking-wider">
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

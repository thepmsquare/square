import React, { Key, useEffect, useState } from "react";
import type { Repositories, Repository } from "@/types/Repositories";
import {
  Button,
  Link,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import repositories from "@/config/repositories";

export default function RepositoryTable() {
  const [displayRepos, changeDisplayRepos] = useState<Repositories | undefined>(
    undefined,
  );

  const getVersionNumbers = async () => {
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
        repo.latestVersion.version = "unable to fetch";
      }

      return repo;
    });

    const updatedRepos = await Promise.all(versionPromises);
    changeDisplayRepos(updatedRepos);
  };

  useEffect(() => {
    getVersionNumbers();
  }, []);

  const repoTableColumns = [
    {
      field: "repoName",
      headerName: "repository name",
    },
    {
      field: "latestVersion",
      headerName: "latest version",
    },
    {
      field: "sourceCodeLink",
      headerName: "source code link",
    },
    {
      field: "previewLink",
      headerName: "preview link",
    },
    {
      field: "programmingLanguage",
      headerName: "programming language",
    },
  ];

  const getCellValueForRepositories = (item: Repository, key: Key) => {
    if (key === "repoName") {
      return <span className="py-1 block">{item.repoName}</span>;
    } else if (key === "latestVersion") {
      return item.latestVersion.type !== "empty" ? (
        <Button
          href={item.latestVersion.publicLink}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          target="_blank"
          size="sm"
          isLoading={item.latestVersion.version === undefined}
        >
          {item.latestVersion.version}
        </Button>
      ) : (
        <></>
      );
    } else if (key === "sourceCodeLink") {
      return (
        <Button
          href={item.sourceCodeLink.value}
          as={Link}
          color={item.sourceCodeLink.isPrivate ? "default" : "primary"}
          showAnchorIcon
          variant="solid"
          target="_blank"
          size="sm"
        >
          {item.sourceCodeLink.isPrivate ? "private link" : "open"}
        </Button>
      );
    } else if (key === "previewLink") {
      return item.previewLink ? (
        <Button
          href={item.previewLink}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          target="_blank"
          size="sm"
        >
          open
        </Button>
      ) : (
        <></>
      );
    } else if (key === "programmingLanguage") {
      return <>{item.programmingLanguage}</>;
    } else {
      console.error(
        `Invalid values in getCellValueForRepositories: item: ${item}, key: ${key}.`,
      );
      return <>unknown error</>;
    }
  };

  if (!displayRepos) {
    return (
      <div className="flex items-center justify-center min-h-[150px]">
        <Spinner />
      </div>
    );
  }

  return (
    <Table aria-label="Table with repo links" className="m-4 w-full">
      <TableHeader columns={repoTableColumns}>
        {(column) => (
          <TableColumn key={column.field}>{column.headerName}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={displayRepos}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {getCellValueForRepositories(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

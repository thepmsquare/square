"use client";

import { Globe, Moon, RefreshCcw, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import RepositoryTable from "@/components/RepositoryTable";
import ServerLinksTable from "@/components/ServerLinksTable";
import { Accordion, Button, Chip, Tooltip } from "@heroui/react";

import config from "../config/config";
import linkToFetchLastUpdatedOn from "../config/lastUpdatedOn";

import type ThemeState from "@/types/ThemeState";
export default function Home() {
  // state
  const { theme, setTheme } = useTheme();

  const [lastUpdatedText, changeLastUpdatedText] = useState<string | undefined>(
    undefined,
  );
  const [mounted, setMounted] = useState(false);

  // functions
  const getLastUpdatedOn = async () => {
    let lastUpdatedOn;
    try {
      const response = await fetch(linkToFetchLastUpdatedOn);
      const data = await response.json();
      lastUpdatedOn = `last updated on: ${new Date(
        data.commit.commit.author.date,
      ).toLocaleDateString()}`;
    } catch (error) {
      console.log(error);
      lastUpdatedOn = "last updated on: unable to fetch";
    }

    changeLastUpdatedText(lastUpdatedOn);
  };

  const toggleThemeState = () => {
    let newThemeState: ThemeState = theme === "dark" ? "light" : "dark";
    setTheme(newThemeState);
    window.localStorage.setItem("theme", newThemeState);
  };

  const setThemeFromLocalStorage = () => {
    let localStorageTheme = window.localStorage.getItem("theme");
    let defaultThemeState: ThemeState;
    if (localStorageTheme !== null) {
      defaultThemeState = localStorageTheme === "dark" ? "dark" : "light";
    } else {
      defaultThemeState = config.defaultThemeState;
      window.localStorage.setItem("theme", config.defaultThemeState);
    }
    setTheme(defaultThemeState);
  };

  // use effect
  useEffect(() => {
    setThemeFromLocalStorage();
    getLastUpdatedOn();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* header section */}
      <header className="sticky top-0 z-50 w-full border-b border-divider bg-background/70 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden shadow-lg border border-divider bg-content1">
              <a href="https://www.thepmsquare.com" target="_blank">
                <Image
                  src="/square/favicon.ico"
                  alt="square logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </a>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              square services | project index
            </h1>
          </div>
          <Tooltip>
            <Tooltip.Trigger>
              <Button
                isIconOnly
                variant="ghost"
                aria-label="theme-toggle"
                onClick={toggleThemeState}
                className="transition-transform active:scale-90"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-warning" />
                ) : (
                  <Moon className="h-5 w-5 text-primary" />
                )}
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content className="bg-content1 border border-divider p-2 rounded shadow-lg text-xs">
              toggle theme
            </Tooltip.Content>
          </Tooltip>
        </div>
      </header>

      {/* main content */}
      <div className="container mx-auto max-w-5xl px-4 py-8 pb-32">
        <Accordion
          variant="surface"
          defaultExpandedKeys={["repositories", "server-links"]}
          allowsMultipleExpanded
          hideSeparator
          className="gap-4 px-0"
        >
          <Accordion.Item
            id="repositories"
            key="repositories"
            className="border border-divider bg-content1 shadow-sm transition-shadow hover:shadow-md"
          >
            <Accordion.Heading>
              <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 hover:bg-default-50">
                <span className="text-xl font-medium text-foreground">
                  list of repositories
                </span>
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel className="px-4 pb-4">
              <RepositoryTable />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item
            id="server-links"
            key="server-links"
            className="border border-divider bg-content1 shadow-sm transition-shadow hover:shadow-md"
          >
            <Accordion.Heading>
              <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 hover:bg-default-50">
                <span className="text-xl font-medium text-foreground">
                  server links
                </span>

                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel className="px-4 pb-4">
              <ServerLinksTable />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* status bar footer */}
      <footer className="fixed bottom-0 z-40 w-full border-t border-divider bg-background/80 backdrop-blur-sm p-3">
        <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
          {lastUpdatedText ? (
            <Chip
              variant="soft"
              color="default"
              className="font-medium opacity-80"
            >
              <div className="flex items-center gap-1">
                <RefreshCcw className="h-3 w-3 animate-spin-slow" />
                {lastUpdatedText}
              </div>
            </Chip>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-4 opacity-60">
            <a
              href="https://www.thepmsquare.com"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Accordion, Button, Chip } from "@heroui/react";
import { Sun, Moon, Globe, RefreshCcw, Terminal } from "lucide-react";

import config from "../config/config";
import linkToFetchLastUpdatedOn from "../config/lastUpdatedOn";

import type ThemeState from "@/types/ThemeState";
import RepositoryTable from "@/components/RepositoryTable";
import ServerLinksTable from "@/components/ServerLinksTable";

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
      ).toLocaleDateString()} by ${data.commit.commit.author.name.toLowerCase()}`;
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
            <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden shadow-lg border border-divider bg-content1">
              <Image 
                src="/square/favicon.ico" 
                alt="square logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
            </div>
            <h1 className="accent-text text-2xl font-bold tracking-tight">
              square services - project index
            </h1>
          </div>

          <Button
            isIconOnly
            variant="light"
            aria-label="theme-toggle"
            onClick={toggleThemeState}
            className="transition-transform hover:rotate-12 active:scale-90"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-warning" />
            ) : (
              <Moon className="h-5 w-5 text-primary" />
            )}
          </Button>
        </div>
      </header>

      {/* main content */}
      <div className="container mx-auto max-w-5xl px-4 py-8 pb-32">
        <Accordion
          variant="splitted"
          defaultExpandedKeys={["1", "2"]}
          allowsMultipleExpanded
          className="gap-4 px-0"
        >
          <Accordion.Item
            id="1"
            key="1"
            aria-label="repositories"
            title={
              <span className="accent-text text-xl">list of repositories</span>
            }
            className="border border-divider bg-content1 shadow-sm transition-shadow hover:shadow-md"
          >
            <RepositoryTable />
          </Accordion.Item>

          <Accordion.Item
            id="2"
            key="2"
            aria-label="server links"
            title={<span className="accent-text text-xl">server links</span>}
            className="border border-divider bg-content1 shadow-sm transition-shadow hover:shadow-md"
          >
            <ServerLinksTable />
          </Accordion.Item>
        </Accordion>
      </div>

      {/* status bar footer */}
      <footer className="fixed bottom-0 z-40 w-full border-t border-divider bg-background/80 backdrop-blur-sm p-3">
        <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
          {lastUpdatedText ? (
            <Chip
              variant="flat"
              color="default"
              size="sm"
              className="text-[10px] font-medium opacity-80"
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
              href="https://github.com/thepmsquare"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Terminal className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

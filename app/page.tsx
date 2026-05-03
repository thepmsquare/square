"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Accordion, AccordionItem, Button } from "@nextui-org/react";

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
      ).toLocaleDateString()} by ${data.commit.commit.author.name}`;
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
    // get stuff from local storage
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
    <main className="p-4 pb-24">
      <Accordion defaultExpandedKeys={["1", "2"]} selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Accordion with repo links"
          title="list of repositories"
        >
          <RepositoryTable />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion with server links"
          title="server links"
        >
          <ServerLinksTable />
        </AccordionItem>
      </Accordion>

      {lastUpdatedText && <p>{lastUpdatedText}</p>}

      <Button
        color="primary"
        aria-label="theme-toggle"
        onClick={toggleThemeState}
        className="fixed bottom-4 right-4"
      >
        {theme === "dark" ? "switch to light mode" : "switch to dark mode"}
      </Button>
    </main>
  );
}

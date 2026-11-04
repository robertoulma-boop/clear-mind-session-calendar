import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
function matchLast(path: string) {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path).at(-1)?.routeId;
}

describe("App routing", () => {
  it("matches the landing page for / instead of falling back to not found", () => {
    expect(matchLast("/")).not.toBe(rootRouteId);
  });

  it("no longer serves the removed agenda, sobre and contato routes", () => {
    for (const path of ["/agenda", "/sobre", "/contato"]) {
      expect(matchLast(path)).toBe(rootRouteId);
    }
  });
});

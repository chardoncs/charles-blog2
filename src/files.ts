import { getFileResponse } from "./lib/utils-server";

export const DEFAULT_PREFIX = "./public";

export interface FileRoute {
  path: string;
  mime: string;
  noPrefix?: boolean;
}

export async function getFileRoutes(...routes: FileRoute[]) {
  return (
    await Promise.all(
      routes.map(async (item) => ({
        route: item.path.startsWith("/") ? item.path : `/${item.path}`,
        res: await getFileResponse(`${item.noPrefix ? "" : DEFAULT_PREFIX + "/"}${item.path}`, item.mime),
      })),
    )
  ).reduce((acc, cur) => ({ ...acc, [cur.route]: cur.res }), {});
}

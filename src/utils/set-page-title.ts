import { pageDefaultTitle } from "@/settings";

export default function setPageTitle(routerTitle?: string): void {
  console.log("routerTitle", routerTitle);
  window.document.title = routerTitle
    ? `${routerTitle}`
    : `${pageDefaultTitle}`;
}

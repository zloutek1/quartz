import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Search()),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/zloutek1",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.Search()),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.PageProperties({ fieldRenderers: { publish: () => null } }),
  ],
  left: [],
  right: [
    Component.Graph({
      localGraph: {
        fontSize: 0.8,
        showTags: true,
      },
      globalGraph: {
        showTags: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = defaultContentPageLayout

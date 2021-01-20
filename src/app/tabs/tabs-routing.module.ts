import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'liste',
        loadChildren: () => import('../liste/liste.module').then(m => m.ListePageModule)
      },
      {
        path: "",
        redirectTo: "tabs/feed",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/feed",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

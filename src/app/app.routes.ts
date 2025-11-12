import { Routes } from '@angular/router';
import { DashboardPage } from './betting-insights/pages/dashboard-page/dashboard-page';
import { ValuebetsPage } from './prediction-analytics/pages/valuebets-page/valuebets-page';
import { FiltersPage } from './data-retrieval/pages/filters-page/filters-page';
import { MetricsPage } from './prediction-analytics/pages/metrics-page/metrics-page';
import { FavoritesPage } from './favorite-teams/pages/favorites-page/favorites-page';
import { MatchdetailsPage } from './betting-insights/pages/matchdetails-page/matchdetails-page';
import { HomePage } from './public/pages/home-page/home-page';
import { PageNotFound } from './public/pages/page-not-found/page-not-found';
import { NotificationsPage } from './notifications/pages/notifications-page/notifications-page';
import { PreferencesPage } from './notifications/pages/preferences-page/preferences-page';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardPage },
    { path: 'value-bets', component: ValuebetsPage,  },
    { path: 'filters', component: FiltersPage },
    { path: 'metrics', component: MetricsPage },
    { path: 'favorites', component: FavoritesPage },
    { path: 'preferences', component: PreferencesPage },
    { path: 'match', component: MatchdetailsPage },
    { path: 'match/:id', component: MatchdetailsPage },
    { path: 'notifications', component: NotificationsPage },
    { path: 'home', component: HomePage },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFound,  },
    

];

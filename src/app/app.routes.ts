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
import { SignIn } from './iam/pages/sign-in/sign-in';
import { SignUp } from './iam/pages/sign-up/sign-up';
import { AuthGuard } from './iam/services/auth.guard';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardPage, canActivate: [AuthGuard] },
    { path: 'value-bets', component: ValuebetsPage, canActivate: [AuthGuard] },
    { path: 'filters', component: FiltersPage, canActivate: [AuthGuard] },
    { path: 'metrics', component: MetricsPage, canActivate: [AuthGuard] },
    { path: 'favorites', component: FavoritesPage, canActivate: [AuthGuard] },
    { path: 'preferences', component: PreferencesPage, canActivate: [AuthGuard] },
    { path: 'match-details', component: MatchdetailsPage, canActivate: [AuthGuard] },
    { path: 'notifications', component: NotificationsPage, canActivate: [AuthGuard] },

    { path: 'home', component: HomePage },
    { path: 'sign-in', component: SignIn },
    { path: 'sign-up', component: SignUp },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
    

];

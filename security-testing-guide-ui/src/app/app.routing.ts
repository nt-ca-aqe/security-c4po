import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './component/_list/list.component';
import {LoginComponent} from './component/login/login.component';
import {ProjectSettingsComponent} from './component/project-settings/project-settings.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ProjectComponent} from './component/project/project.component';
import {TestFrameComponent} from './component/test/test-frame/test-frame.component';
import {OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'tests',
    component: ListComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects/:id/settings',
    component: ProjectSettingsComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'projects/:id/:testId',
    component: TestFrameComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    data: {
      onAuthRequired
    }
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

export const Routing = RouterModule.forRoot(appRoutes);

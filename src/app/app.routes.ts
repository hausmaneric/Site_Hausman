import { Routes } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { PrivacyComponent } from './components/quartzo/privacy/privacy.component';
import { MainComponent } from './components/main/main.component';
import { AccountDeleteComponent } from './components/quartzo/account-delete/account-delete.component';

export const routes: Routes = [
  { path: '', component: MainComponent, },
  { path: 'quartzo_privacy', component: PrivacyComponent  },
  { path: 'quartzo_account_delete', component: AccountDeleteComponent}
];

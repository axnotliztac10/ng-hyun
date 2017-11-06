import {Routes} from "@angular/router";
import {HomePluginComponent} from "./body/content/plugins/page-home-plugin/home-plugin.component";
import {AutomobilePluginComponent} from "./body/content/plugins/page-automobile-plugin/automobile-plugin.component";
import {MeetPluginComponent} from "./body/content/plugins/page-meet-plugin/meet-plugin.component";
import {TestdrivePluginComponent} from "./body/content/plugins/page-testdrive-plugin/testdrive-plugin.component";
import {DealersPluginComponent} from "./body/content/plugins/page-dealers-plugin/dealers-plugin.component";
import {PageSContactComponent} from "./body/content/plugins/page-s-contact/page-s-contact.component";
import {PageSLegalComponent} from "./body/content/plugins/page-s-legal/page-s-legal.component";
import {PageSMapComponent} from "./body/content/plugins/page-s-map/page-s-map.component";
import {PageSPrivacyComponent} from "./body/content/plugins/page-s-privacy/page-s-privacy.component";
import {PageSTermsComponent} from "./body/content/plugins/page-s-terms/page-s-terms.component";
import {PageSFinanceComponent} from "./body/content/plugins/page-s-finance/page-s-finance.component";
import {PageSServiceComponent} from "./body/content/plugins/page-s-service/page-s-service.component";
import {PageSWarantyComponent} from "./body/content/plugins/page-s-waranty/page-s-waranty.component";
import {PageSAssistanceComponent} from "./body/content/plugins/page-s-assistance/page-s-assistance.component";
import {PageSNewsComponent} from "./body/content/plugins/page-s-news/page-s-news.component";
import {PageSPromotionsComponent} from "./body/content/plugins/page-s-promotions/page-s-promotions.component";

export const routes: Routes = [
  { path: '', component: HomePluginComponent },
  { path: 'conoce', component: MeetPluginComponent },
  { path: 'conoce/:product', component: MeetPluginComponent },
  { path: 'conoce/:product/:version', component: MeetPluginComponent },
  { path: 'prueba', component: TestdrivePluginComponent },
  { path: 'prueba/:product', component: TestdrivePluginComponent },
  { path: 'prueba/:product/ahora', component: TestdrivePluginComponent },
  { path: 'distribuidores', component: DealersPluginComponent },
  { path: 'contacto', component: PageSContactComponent },
  { path: 'legal', component: PageSLegalComponent },
  { path: 'mapa', component: PageSMapComponent },
  { path: 'privacidad', component: PageSPrivacyComponent },
  { path: 'terminos', component: PageSTermsComponent },
  { path: 'financiamiento', component: PageSFinanceComponent },
  { path: 'servicio', component: PageSServiceComponent },
  { path: 'garantia', component: PageSWarantyComponent },
  { path: 'asistencia', component: PageSAssistanceComponent },
  { path: 'promociones', component: PageSPromotionsComponent },
  { path: 'noticias', component: PageSNewsComponent },
  { path: ':product', component: AutomobilePluginComponent }
];

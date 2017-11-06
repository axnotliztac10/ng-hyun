import { NgModule } from '@angular/core';

import {HyuContentService} from "./hyu-content.service";

import {AutomobilePluginModule} from "./plugins/page-automobile-plugin/automobile-plugin.module";
import {HomePluginModule} from "./plugins/page-home-plugin/home-plugin.module";
import {MeetPluginModule} from "./plugins/page-meet-plugin/meet-plugin.module";
import {TestdrivePluginModule} from "./plugins/page-testdrive-plugin/testdrive-plugin.module";
import {PageSWarantyPluginModule} from "./plugins/page-s-waranty/page-s-waranty.module";
import {PageSAssistancePluginModule} from "./plugins/page-s-assistance/page-s-assistance.module";
import {PageSContactPluginModule} from "./plugins/page-s-contact/page-s-contact-module";
import {PageSServicePluginModule} from  "./plugins/page-s-service/page-s-service-module";
import {PageSLegalPluginModule} from "./plugins/page-s-legal/page-s-legal-module";
import {PageSMapPluginModule} from "./plugins/page-s-map/page-s-map-module";
import {PageSPrivacyPluginModule} from "./plugins/page-s-privacy/page-s-privacy-module";
import {PageSTermsPluginModule} from "./plugins/page-s-terms/page-s-terms-module";
import {DealersPluginModule} from "./plugins/page-dealers-plugin/dealers-plugin.module";
import {PageSFinancePluginModule} from "./plugins/page-s-finance/page-s-finance-plugin.module";
import {PageSPromotionsModule } from './plugins/page-s-promotions/page-s-promotions.module';
import {PageSNewsModule} from './plugins/page-s-news/page-s-news.module';

@NgModule({
  imports: [
    AutomobilePluginModule,
    HomePluginModule,
    MeetPluginModule,
    TestdrivePluginModule,
    DealersPluginModule,
    PageSFinancePluginModule,
    PageSWarantyPluginModule,
    PageSAssistancePluginModule,
    PageSContactPluginModule,
    PageSServicePluginModule,
    PageSLegalPluginModule,
    PageSMapPluginModule,
    PageSPrivacyPluginModule,
    PageSTermsPluginModule,
    PageSPromotionsModule,
    PageSNewsModule
  ],
  declarations: [],
  exports: [],
  providers: [HyuContentService]
})

export class ContentModule { }

import {
  NgModule,
  ModuleWithProviders,
  Component,
  Directive,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  AfterViewInit,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import * as webpackMerge from 'webpack-merge';

class SmpAbstractForm {

}

class SmpAbstractFuneralEvents {

}

class SmpAbstractPushProductReassure {

}

const routes = [];

@NgModule({
  imports: [SmpDemoAppSharedModule],
  declarations: [SmpHomeComponent],
  exports: []
})
export class SmpHomeModule {
}
//////////


const MODS: any[] = [
  SmpSharedModule, SmpModule
];

@NgModule({
  imports: MODS,
  exports: MODS
})
export class SmpDemoAppSharedModule { }
//////////


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SmpComponentDemoModule,
    SmpDirectiveDemoModule,
    SmpDemoAppCoreModule,
    SmpHomeModule
  ],
  declarations: [SmpAppComponent],
  bootstrap: [SmpAppComponent]
})
export class AppModule {}
//////////


@NgModule({
  declarations: [
    SmpMediaBackgroundDirective
  ],
  exports: [
    SmpMediaBackgroundDirective
  ]
})
export class SmpMediaBackgroundModule { }
//////////


@NgModule({
  declarations: [
    SmpForCountryDirective
  ],
  exports: [
    SmpForCountryDirective
  ]
})
export class SmpForCountryModule { }
//////////


@NgModule({
  imports: [
    SmpComponentDemoRoutingModule,
    SmpDemoAppSharedModule
  ],
  declarations: [
    SmpAutoCompleteDemoComponent,
    SmpComponentDemoComponent,
    SmpCondolenceItemDemoComponent,
    SmpCondolenceListDemoComponent,
    SmpEmailFormDemoComponent,
    SmpFuneralEventsEventDemoComponent,
    SmpFuneralHomeRatingLineComponent,
    SmpLabelPartnerDemoComponent,
    SmpPushProductReassureDemoComponent,
    SmpRatingDemoComponent,
    SmpFormDemoComponent,
    SmpDropdownDemoComponent
  ],
})
export class SmpComponentDemoModule {}
//////////


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmpComponentDemoRoutingModule { }
//////////


@NgModule({
  imports: [
    SmpDemoAppSharedModule,
    SmpDirectiveDemoRoutingModule
  ],
  declarations: [
    SmpDirectiveDemoComponent,
    SmpMultitenantCountryDemoComponent,
    SmpMediaBackgroundDemoComponent
  ],
  exports: []
})
export class SmpDirectiveDemoModule {}
//////////


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmpDirectiveDemoRoutingModule { }
//////////


@NgModule({
  imports: [
    SmpCoreModule,
    SmpContextModule,
    SmpModule.forRoot()
  ],
  exports: [SmpCoreModule],
})
export class SmpDemoAppCoreModule {}
//////////

const ROUTES = ['test'];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//////////


@NgModule({
  imports: [],
  exports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule]
})
export class SmpSharedModule { }
//////////

@NgModule({})
export class SmpUrlModule {
  static forRoot() {
    return [];
  }
}
//////////


const SMP_MODULES: any[] = [
  SmpComponentsModule,
  SmpDirectivesModule,
  SmpFormModule
];

@NgModule({
  imports: [
    ...SMP_MODULES,
    SmpFormModule.forRoot(),
    SmpDateModule.forRoot(),
    SmpUrlModule.forRoot(),
    SmpEmailModule.forRoot()

  ]
})
export class SmpRootModule {
}
//////////


@NgModule({
  imports: SMP_MODULES,
  exports: SMP_MODULES
})
export class SmpModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SmpRootModule };
  }
}
//////////


@NgModule({})
export class SmpContextModule {
  static forRoot() { return []; }
}
//////////


@NgModule({
  imports: [
    SmpForCountryModule,
    SmpMediaBackgroundModule,
  ],
  exports: [
    SmpForCountryModule,
    SmpMediaBackgroundModule
  ]
})
export class SmpDirectivesModule { }
//////////


@NgModule({
  imports: [MaterialModule.forRoot()],
  exports: [MaterialModule]
})
export class SmpCoreModule { }
//////////


@NgModule({})
export class SmpDateModule {
  static forRoot() {
    return [];
  }
 }
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpFuneralHomeRatingFullComponent
  ],
  exports: [
    SmpFuneralHomeRatingFullComponent
  ]
})
export class SmpFuneralHomeRatingModule { }
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpEmailFormComponent
  ],
  exports: [
    SmpEmailFormComponent
  ]
})
export class SmpEmailModule {
  static forRoot() {
    return [];
  }
}
//////////


const FE_MODULES: any[] = [
  SmpFuneralEventsFullComponent,
  SmpFuneralEventsEventComponent,
  SmpFuneralEventsAddressComponent,
  SmpFuneralEventsGroupComponent
];
@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: FE_MODULES,
  exports: FE_MODULES
})
export class SmpFuneralEventsModule { }
//////////


export const MODULES: any[] = [
  SmpFormSuccessComponent,
  SmpFormErrorComponent
]
@NgModule({
  declarations: MODULES,
  exports: MODULES
})
export class SmpFormModule {
  static forRoot() { 
    return [];
  }
}
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpCustomerReviewListComponent,
    SmpCustomerReviewItemComponent
  ],
  exports: [
    SmpCustomerReviewListComponent,
    SmpCustomerReviewItemComponent
  ]
})
export class SmpCustomerReviewModule { }
//////////


@NgModule({
  imports: [
    SmpSharedModule,
    SmpDirectivesModule
  ],
  declarations: [
    SmpPushProductReassureBannerComponent,
    SmpPushProductReassureButtonLinkComponent,
    SmpPushProductReassureTextComponent,
    SmpPushProductReassureCompactComponent,
    SmpPushProductReassureFullComponent
  ],
  exports: [
    SmpPushProductReassureCompactComponent,
    SmpPushProductReassureFullComponent
  ]
})
export class SmpPushProductReassureModule {
}
//////////


const DIRECTIVES = [
  SmpDropdownPanelComponent,
  SmpDropdownItemComponent,
  SmpDropdownTriggerDirective,
  SmpDropdownItemComponent,
  SmpDropdownTestButtonComponent,
  SmpDropdownTestInputComponent,
  SmpDropdownPaginationPreviousDirective,
  SmpDropdownPaginationNextDirective,
  SmpDropdownPaginationComponent,
  SmpDropdownFilterComponent
];

@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class SmpSmartListModule { }
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpCondolenceListComponent,
    SmpCondolenceItemComponent
  ],
  exports: [
    SmpCondolenceListComponent,
    SmpCondolenceItemComponent
  ]
})
export class SmpCondolenceModule { }
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpShowCaseComponentComponent
  ],
  exports: [
    SmpShowCaseComponentComponent
  ]
})
export class SmpShowcaseComponentModule { }
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpRatingComponent,
    SmpDropdownCtaDirective
  ],
  exports: [
    SmpRatingComponent
  ]
})
export class SmpRatingModule { }
//////////


export const COMP_MODULES: any[] = [
  SmpCondolenceModule,
  SmpEmailModule,
  SmpFuneralEventsModule,
  SmpLabelPartnerModule,
  SmpPushProductReassureModule,
  SmpRatingModule,
  SmpShowcaseComponentModule,
  SmpFormModule,
  SmpSmartListModule
];

@NgModule({
  imports: COMP_MODULES,
  exports: COMP_MODULES
})
export class SmpComponentsModule { }
//////////


@NgModule({
  imports: [
    SmpSharedModule
  ],
  declarations: [
    SmpLabelPartnerCompactComponent,
    SmpLabelPartnerFullComponent,
    SmpLabelPartnerDescriptionComponent,
    SmpLabelPartnerPictoComponent
  ],
  exports: [
    SmpLabelPartnerCompactComponent,
    SmpLabelPartnerFullComponent
  ]
})
export class SmpLabelPartnerModule { }
//////////


@NgModule({})
export class SmpFacadeModule { }
//////////

@Component({
  selector: 'smp-home',
  template: ''
})
export class SmpHomeComponent {}
//////////


@Component({
  selector: 'smp-rating-demo',
  template: ''
})
export class SmpRatingDemoComponent {}
//////////


@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class SmpFormDemoComponent { }
//////////


@Component({
  selector: 'smp-dropdown-demo',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmpDropdownDemoComponent { }
//////////


@Component({
  selector: 'smp-push-product-reassure-demo',
  template: '',
})
export class SmpPushProductReassureDemoComponent { }
//////////


@Component({
  selector: 'smp-auto-complete-demo',
  template: '',
})
export class SmpAutoCompleteDemoComponent { }
//////////


@Component({
  selector: 'smp-label-partner-demo',
  template: '',
})
export class SmpLabelPartnerDemoComponent { }
//////////


@Component({
  template: '',
})
export class SmpEmailFormDemoComponent { }
//////////


@Component({
  selector: 'smp-condolence-item-demo',
  template: '',
})
export class SmpCondolenceItemDemoComponent { }
//////////


@Component({
  selector: 'smp-condolence-list-demo',
  template: '',
})
export class SmpCondolenceListDemoComponent { }
//////////


@Component({
  selector: 'smp-funeral-events-event-demo',
  template: '',
})
export class SmpFuneralEventsEventDemoComponent {}
//////////


@Component({
  template: '',
})
export class SmpComponentDemoComponent { }
//////////


@Component({
  template: '',
})
export class SmpDirectiveDemoComponent { }
//////////


@Component({
  template: '',
})
export class SmpMediaBackgroundDemoComponent {}
//////////


@Component({
  selector: 'smp-multitenant-country-demo',
  template: '',
})
export class SmpMultitenantCountryDemoComponent { }
//////////


@Component({
  selector: 'smp-app',
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpAppComponent { }
//////////


@Directive({
  selector: '[smp-media-background]'
})
export class SmpMediaBackgroundDirective { }
//////////


@Directive({
  selector: '[smp-for-country]'
})
export class SmpForCountryDirective { }
//////////


@Component({
  selector: 'smp-funeral-home-rating-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpFuneralHomeRatingLineComponent { }
//////////


@Component({
  selector: 'smp-funeral-home-rating-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpFuneralHomeRatingFullComponent { }
//////////


@Component({
  selector: 'smp-email-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpEmailFormComponent implements OnInit {
  ngOnInit() {}
}
//////////


@Component({
  selector: 'smp-funeral-events-address',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpFuneralEventsAddressComponent { }
//////////


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'smp-funeral-events-group',
  template: '',
})
export class SmpFuneralEventsGroupComponent { }
//////////

@Component({
  selector: 'smp-funeral-events-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpFuneralEventsEventComponent { }
//////////


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'smp-funeral-events-full',
  template: '',
})

export class SmpFuneralEventsFullComponent extends SmpAbstractFuneralEvents { }
//////////


@Component({
  selector: 'smp-form-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpFormErrorComponent extends SmpAbstractForm { }
//////////


@Component({
  selector: 'smp-form-success',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpFormSuccessComponent extends SmpAbstractForm { }
//////////


@Component({
  selector: 'smp-customer-review-list',
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpCustomerReviewListComponent { }
//////////


@Component({
  selector: 'smp-customer-review-item',
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpCustomerReviewItemComponent {}
//////////


@Component({
  selector: 'smp-push-product-reassure-button-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class SmpPushProductReassureButtonLinkComponent { }
//////////


@Component({
  selector: 'smp-push-product-reassure-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class SmpPushProductReassureTextComponent { }
//////////


@Component({
  selector: 'smp-push-product-reassure-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class SmpPushProductReassureBannerComponent { }
//////////


@Component({
  selector: 'smp-push-product-reassure-compact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpPushProductReassureCompactComponent extends SmpAbstractPushProductReassure { }
//////////


@Component({
  selector: 'smp-push-product-reassure-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpPushProductReassureFullComponent extends SmpAbstractPushProductReassure {}
//////////


@Component({
  selector: 'smp-showcase-component',
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpShowCaseComponentComponent { }
//////////


@Component({
  selector: 'smp-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpRatingComponent { }
//////////


@Directive({
  selector: 'smp-dropdown-cta,[smp-dropdown-cta]'
})
export class SmpDropdownCtaDirective {}
//////////


@Component({
  selector: 'smp-dropdown-panel',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'smpDropdownPanelComponent'
})
export class SmpDropdownPanelComponent { }
//////////


@Directive({
  selector: '[smp-dropdown-trigger]',
  exportAs: 'smpDropdownTrigger',
  host: {
    'tabindex': '0'
  }
})
export class SmpDropdownTriggerDirective implements AfterViewInit, OnDestroy {
  ngAfterViewInit() {

  }
  ngOnDestroy() {

  }
 }
//////////


@Component({
  selector: 'smp-dropdown-pagination',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'tabindex': '-1'
  }
})
export class SmpDropdownPaginationComponent { }
//////////


@Directive({
  selector: 'smp-dropdown-pagination-previous,[smp-dropdown-pagination-previous]'
})
export class SmpDropdownPaginationPreviousDirective { }
//////////


@Directive({
  selector: 'smp-dropdown-pagination-next,[smp-dropdown-pagination-next]'
})
export class SmpDropdownPaginationNextDirective { }
//////////


@Component({
  selector: 'smp-dropdown-filter',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'tabindex': '-1'
  }
})
export class SmpDropdownFilterComponent implements OnInit, OnDestroy {
  ngOnInit() { }
  ngOnDestroy() { }
 }
//////////


@Component({
  selector: 'smp-dropdown-item',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'tabindex': '-1'
  }
})
export class SmpDropdownItemComponent { }
//////////


@Component({
  selector: 'smp-dropdown-test-input',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmpDropdownTestInputComponent { }
//////////


@Component({
  selector: 'smp-dropdown-test-button',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmpDropdownTestButtonComponent { }
//////////


@Component({
  selector: 'smp-condolence-list',
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpCondolenceListComponent { }
//////////


@Component({
  selector: 'smp-condolence-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpCondolenceItemComponent { }
//////////


@Component({
  selector: 'smp-label-partner-picto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpLabelPartnerPictoComponent { }
//////////


@Component({
  selector: 'smp-label-partner-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '',
})
export class SmpLabelPartnerDescriptionComponent { }
//////////


@Component({
  selector: 'smp-label-partner-compact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpLabelPartnerCompactComponent { }
//////////


@Component({
  selector: 'smp-label-partner-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  template: '',
})
export class SmpLabelPartnerFullComponent { }
//////////

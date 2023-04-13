import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObserverComponent } from './ovserver/observer.component';
import { ListComponent } from './ovserver/list/list.component';
import { FromEventComponent } from './ovserver/from-event/from-event.component';
import { IntervalComponent } from './ovserver/interval/interval.component';
import { OfFromComponent } from './ovserver/of-from/of-from.component';
import { ToArrayComponent } from './ovserver/to-array/to-array.component';
import { CustomComponent } from './ovserver/custom/custom.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './ovserver/pluck/pluck.component';
import { FilterComponent } from './ovserver/filter/filter.component';
import { TapComponent } from './ovserver/tap/tap.component';
import { TakeComponent } from './ovserver/take/take.component';
import { RetryComponent } from './ovserver/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebouncetimeComponent } from './ovserver/debouncetime/debouncetime.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaySubjectComponent } from './ovserver/replay-subject/replay-subject.component';
import { AsyncProjectComponent } from './ovserver/async-project/async-project.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMApComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './ovserver/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { FormsModule } from '@angular/forms';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObserverComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncProjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMApComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    SwitchMapSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoadingBarModule  //for Core Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

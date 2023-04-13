import { ReplaySubjectComponent } from './ovserver/replay-subject/replay-subject.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DebouncetimeComponent } from './ovserver/debouncetime/debouncetime.component';
import { SubjectComponent } from './subject/subject.component';
import { AsyncProjectComponent } from './ovserver/async-project/async-project.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMApComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './ovserver/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObserverComponent, children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of_from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debouncetime', component: DebouncetimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncProjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergeMap', component: MergeMApComponent },
      { path: 'concatMap', component: ConcatMapComponent },
      { path: 'switchMap', component: SwitchMapComponent },
      { path: 'switchMapSearch', component: SwitchMapSearchComponent }
    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

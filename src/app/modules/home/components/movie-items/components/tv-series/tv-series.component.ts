import {Component, HostListener, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ITvSeriesResult} from "../../../../../../componnets/models/tv-series.model";
import {Store} from "@ngrx/store";
import {selectPopularTvSeries} from "../../../../../../componnets/store/tv-series/selectors/popular-tvSeries.selectors";
import {
  selectOnTheAirTvSeries
} from "../../../../../../componnets/store/tv-series/selectors/onTheAir-tvSeries.selectors";
import {
  selectAiringTodayTvSeries
} from "../../../../../../componnets/store/tv-series/selectors/AiringToday-tvSeries.selectors";

export interface ITvSeriesLists {
  name: string;
  links: string;
}

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {
  popularTvSeries$: Observable<ITvSeriesResult[] | undefined>;
  onTheAirTvSeries$: Observable<ITvSeriesResult[] | undefined>;
  airingTodayTvSeries$: Observable<ITvSeriesResult[] | undefined>;
  responsiveOptions: any[] | undefined;
  tvSeriesLists: ITvSeriesLists[] = [];
  showNavigator: boolean = true;
  windowResize = new Subject<void>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowResize.next();
  }

  constructor(private store: Store) {
    this.popularTvSeries$ = this.store.select(selectPopularTvSeries);
    this.onTheAirTvSeries$ = this.store.select(selectOnTheAirTvSeries);
    this.airingTodayTvSeries$ = this.store.select(selectAiringTodayTvSeries);
  }

  ngOnInit(): void {

    this.windowResize.subscribe(() => {
      this.showNavigator = window.innerWidth >= 592;
    })

    this.tvSeriesLists = [
      {name: 'Popular tv series', links: 'tvSeries/popular'},
      {name: 'On the air tv series', links: 'tvSeries/onTheAir'},
      {name: 'Airing today tv series', links: 'tvSeries/airingToday'}
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}

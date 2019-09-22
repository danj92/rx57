import { interval, fromEvent } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap  } from 'rxjs/operators';


const stream$ = fromEvent(document, 'click')
  .pipe(
    switchMap(event => {
      return interval(1000)
        .pipe(
          take(5),
          reduce((acc, val) => acc + val, 0)
        )
    })
  )


// const stream$ = interval(1000)
//   .pipe(
    // tap(v => console.log('Tap:', v)),
    // map( (v) => v * 3),
    // filter(v => v % 2 === 0),
    // take(10),
    // takeLast(5)
    // takeWhile( v => v < 7)
    // scan((acc, val) => acc + val, 0)
  //   take(5),
  //   reduce((acc, val) => acc + val, 0)
  // )

stream$.subscribe({
  next: v => console.log('Next', v),
  complete: () => console.log('Complete')
})
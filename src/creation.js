import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs';
import { scan, map } from 'rxjs/operators';


// const stream$ = of(1, 2, 3, 4);

// stream$.subscribe(val => console.log(val))


// const stream$ = from([1, 2, 3, 4]);

// stream$.pipe(
//   scan((acc, val) => acc.concat(val), [])
// ).subscribe( v => console.log(v));

// const stream$ = new Observable(observable => {
//   observable.next('First value')

//   setTimeout(() => observable.next('After 1000'), 1000)
//   setTimeout(() => observable.complete(), 1500)
//   // setTimeout(() => observable.error('error'), 2000)
//   setTimeout(() => observable.next('After 3000'), 3000)
// })

// stream$.subscribe(
//   val => console.log('val=', val),
//   error => console.log(error),
//   () => console.log('Complete')
// )

// stream$.subscribe(
//   {
//     next(val) {
//       console.log(val)
//     },
//     error(err) {
//       console.log(err)
//     },
//     complete() {
//       console.log('Complete')
//     }
//   }
// )

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map( e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d')
//     }))
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//   })


// const clear$ = fromEvent(document.getElementById('clear'), 'click')

// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

// const sub = interval(500).subscribe(val => console.log(val))

// setTimeout(() => {
//   sub.unsubscribe();
// }, 4000)


// timer(2500).subscribe(v => console.log(v))

// range(42, 10).subscribe(v => console.log(v))
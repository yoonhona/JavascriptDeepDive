// export한 모든 식별자를 import 가능
import {pi, square, Person} from './lib.mjs'
// as를 사용하여 식별자 이름을 변경 가능
import {pi as PI, square as sq, Person as P} from './lib.mjs'
import square2 from './lib.mjs'

console.log(pi);
console.log(PI);
console.log(square(10));
console.log(sq(20));
console.log(square(10));
console.log(new Person('Na'));
console.log(new P('윤호'));

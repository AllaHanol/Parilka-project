import moment from "moment";
import 'moment/locale/uk';

moment.locale('uk');

export function timeFromNow(time) {
   return moment(time).fromNow(); 
}
export function toDate(time) {
   return moment(time).format('DD.MM.YYYY')
}

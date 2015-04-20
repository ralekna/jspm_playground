/**
 * Created by rytis on 4/20/15.
 */
export default class StringUtils {
  static toUpper(value) {
    if(typeof value === 'string') {
      return value.toUpperCase();
    }
  }
}
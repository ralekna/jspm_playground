/**
 * Created by rytis on 4/21/15.
 */
import StringUtils from 'lib/StringUtils';

describe('String utils specs', () => {
  it('just have to run', () => {
    expect(StringUtils.toUpper('hello')).toBe('HELLO');
  });
});

import { render } from 'test/utilities';
import { expect, test } from 'vitest';
import TimeZone from '.';

test.todo('it should render successfully', () => {
  render(<TimeZone />);
});

test.fails.todo('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});

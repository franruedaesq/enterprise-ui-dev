import { KanbanBoard } from '$lib/kanban-board';
import { createPerson, Person } from '$lib/person';
import { describe, expect, it } from 'vitest';

/**
 * toBe: https://vitest.dev/api/expect.html#tobe
 * toBeCloseTo: https://vitest.dev/api/expect.html#tobecloseto
 * toBeInstanceOf: https://vitest.dev/api/expect.html#tobeinstanceof
 * toBeUndefined: https://vitest.dev/api/expect.html#tobeundefined
 * toContain: https://vitest.dev/api/expect.html#tocontain
 * toThrow: https://vitest.dev/api/expect.html#tothrow
 * toThrowError: https://vitest.dev/api/expect.html#tothrowerror
 */

// it.todo is used to create a placeholder test that is expected to be implemented later.
// todo test are skipped during test execution.
it('should pass if the two numbers would add up correctly in a language other than JavaScript', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});

describe('createPerson', () => {
  it('should create an instance of a person', () => {
    const person = createPerson('Ada Lovelace');
    expect.hasAssertions();
    expect(person).toBeInstanceOf(Person);
    // Verify that person is an instance of a Person.
  });
});

describe('Kanban Board', () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    expect(board.statuses).toContain('Backlog');
  });

  it('should *not* include "Bogus" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    // Verify that board.statuses does not contain "Bogus".
    expect(board.statuses).not.toContain('Bogus');
  });

  it('should include an added status in board.statuses using #addStatus', () => {
    const board = new KanbanBoard('Things to Do');
    // hasAssertions ensures that at least one assertion is called during a test.
    expect.hasAssertions();
    // Use board.addStatus to add a status.
    // Verify that the new status is—in fact—now in board.statuses.
    board.addStatus('In Progress');
    expect(board.statuses).toContain('In Progress');
  });

  it('should remove a status using #removeStatus', async () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    const statusToRemove = 'Backlog';
    await board.removeStatus(statusToRemove);
    expect(board.statuses).not.toContain(statusToRemove);
  });
});

describe('Person', () => {
  it('will create a person with a first name', () => {
    const person = new Person('Madonna');
    expect.hasAssertions();
    expect(person.firstName).toBe('Madonna');
    // Verify that person.firstName is correct.
  });

  it('will create a person with a first and last name', () => {
    const person = new Person('Madonna Cicone');
    expect.hasAssertions();
    // Verify that person.lastName is correct.
    expect(person.lastName).toBe('Cicone');
  });

  it('will create a person with a first, middle, and last name', () => {
    const person = new Person('Madonna Louise Cicone');
    expect.hasAssertions();
    // Verify that person.middleName is correct.
    expect(person.middleName).toBe('Louise');
  });

  it('will throw if you provide an empty string', () => {
    const fn = () => {
      new Person('');
    };

    expect.hasAssertions();
    // to throw means the function will raise an exception when called
    expect(fn).toThrow();
    // Verify that function above throws.
  });

  it('will throw a specific error message if you provide an empty string', () => {
    const errorMessage = 'fullName cannot be an empty string';

    const fn = () => {
      new Person('');
    };

    expect.hasAssertions();

    expect(fn).toThrowError(errorMessage);

    // Verify that function above throws the error message above.
  });

  it('will add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect.hasAssertions();
    expect(john.friends).toContain(paul);

    // Verify that john.friends contains paul.
  });

  it('will mutually add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect.hasAssertions();

    expect(paul.friends).toContain(john);

    // Verify that paul.friends contains john.
  });

  it('will remove a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    expect(john.friends).not.toContain(paul);

    // Verify that john.friends does not include paul.
  });

  it('will mutually remove friends', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    expect(paul.friends).not.toContain(john);

    // Verify that paul.friends does not include john.
  });
});

const explode = () => {
  throw new Error('Something went terribly wrong');
};

describe('explode', () => {
  it('should throw an error', () => {
    expect.hasAssertions();
    expect(explode).toThrow();
    // Verify that explode throws an error.
  });

  it.todo('should throw a specific error containing "terribly wrong"', () => {
    expect.hasAssertions();
    expect(explode).toThrowError(/terribly wrong/);

    // Verify that explode throws an error containing "terribly wrong".
  });
});

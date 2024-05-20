import { classNames } from './classNames';
//import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('only one first parametr', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('widt additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('widt mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('widt mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']),
    ).toBe(expected);
  });

  test('widt mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      //@ts-ignore пришлось вставить из-за scrollable:undefined
      classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']),
    ).toBe(expected);
  });
});

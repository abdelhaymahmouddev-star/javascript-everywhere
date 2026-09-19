# Day 02 Notes

## const vs let

`const` is used when the variable binding should not be reassigned.
`let` is used when the value needs to be reassigned.

A const array can still be changed because const protects the binding, not the contents.

Example:
const numbers = [];
numbers.push(10);

## JavaScript primitive types

1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol
7. null

## Why typeof null returns "object"

`typeof null` returns `"object"` because of a historical behavior in JavaScript.

To check specifically for null:

```js
value === null
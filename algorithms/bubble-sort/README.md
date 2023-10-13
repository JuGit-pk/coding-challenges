# Bubble Sort

**Date Solved:** [October 13, 2023]

## Algorithem

- to sort the list
- by comparing adjacent elements in the array and swap them (accending/decending)

## Description

This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

### Reference

[Freecodecamp](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort)
[GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript)

### Instructions

Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

## Key Challenges

- the role of the outer loop and the inner loop
- optimization of the inner and outer loop
  - Outer Loop will be run array.lenght-1 (steps of the algorithem)
    - for example: if the array's length is 5, the algorithm's step will be 4 [0-3](4 steps)
  - The inner loop efficiently runs each time, with one less iteration, because after each pass, the largest element finds its place at the end of the array (bubbles up);
- break the outer loop if no swap by the inner loop

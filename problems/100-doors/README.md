# 100 Doors Problem

**Date Solved:** [Octoober 11, 2023]

## Problem Description

There are 100 doors in a row that are all initially closed.

You make 100 passes by the doors.

The first time through, visit every door and toggle the door (if the door is closed, open it; if it is open, close it).

The second time, only visit every 2nd door (door #2, #4, #6, ...), and toggle it.

The third time, visit every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

### Task

Answer the question: what state are the doors in after the last pass? Which are open, which are closed?

## Problem Link

You can find the full problem description on [Rosseta Code](https://www.rosettacode.org/wiki/100_doors).

## Key Challenges

- handling the array with the index starting at 0 and passing through 100 doors with the index starting at 1

## Optimizations

- this can be optimized by using the square root of the number untill which the doors are being passed through
- 1 , 4 , 9 , 16 , 25 , 36 , 49 , 64 , 81 , 100

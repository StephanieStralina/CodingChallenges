 <!-- Challenge 1 -->
 <!-- Complete the solution so that it reverses the string passed into it. -->

<!-- Answer 1 -->
<?php
function solution(string $str): string {
  return strrev($str);
}
?>

<!-- Challenge 2 -->
<!-- Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 -->

<!-- Answer 2 -->
<?php
function past($h, $m, $s) {
  return (
    ($h*3600000) + ($m*60000) +($s*1000)
  );
}
?>
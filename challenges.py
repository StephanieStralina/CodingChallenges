# Challenge 1
# There was a test in your class and you passed it. Congratulations!
# But you're an ambitious person. You want to know if you're better than the average student in your class.
# You receive an array with your peers' test scores. Now calculate the average and compare your score!
# Return true if you're better, else false!

# Answer 1
# Array w/ peers test scores (not yours, add them in to calculate class average)
# Compare average with your score, return true if you're better otherwise false
def better_than_average(class_points, your_points):
    average = (sum(class_points) + your_points)/(len(class_points)+1)
    return your_points > average

# Challenge 2
# Complete the square sum function so that it squares each number passed into it and then sums the results together.
# For example, for [1, 2, 2] should return 9

# Answer 2
def square_sum(numbers):
    return sum(x * x for x in numbers) 

# Challenge 3
# Implement a function which convert the given boolean value into its string representation.

# Answer 3
def boolean_to_string(b):
    return str(b)
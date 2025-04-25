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

# Challenge 4
# Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
# Numerical Score	Letter Grade
# 90 <= score <= 100	'A'
# 80 <= score < 90	'B'
# 70 <= score < 80	'C'
# 60 <= score < 70	'D'
# 0 <= score < 60	'F'
# Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

# Answer 4
def get_grade(s1, s2, s3):
    average_grade = (s1 + s2 + s3)/3
    match average_grade:
        case x if 90 <= x:
            return 'A'
        case x if 80 <= x <= 90:
            return 'B'
        case x if 70 <= x <= 80:
            return 'C'
        case x if 60 <= x <= 70:
            return 'D'
        case x if x <= 60:
            return "F"

# Challenge 5
# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
# You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

# Answer 5
def remove_char(s):
    return s[1:-1]
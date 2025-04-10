# Challenge 1
# There was a test in your class and you passed it. Congratulations!
# But you're an ambitious person. You want to know if you're better than the average student in your class.
# You receive an array with your peers' test scores. Now calculate the average and compare your score!
# Return true if you're better, else false!

# Answer 1
# Array w/ peers test scores (not yours, add them in to calculate class average)
# Compare average with your score, return true if you're better otherwise false
def better_than_average(class_points, your_points):
    # Your code here
    average = (sum(class_points) + your_points)/(len(class_points)+1)
    return your_points > average
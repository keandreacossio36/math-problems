def find_max_in_list(numbers):
    max_value = numbers[0]
    for num in numbers:
        if num > max_value:
            max_value = num
    return max_value

numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
max_num = find_max_in_list(numbers)
print("The maximum value in the list is:", max_num)

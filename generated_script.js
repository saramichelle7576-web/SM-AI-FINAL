Okay, here are a few ways to write a Python script that calculates the factorial of 5.

The factorial of 5 (written as 5!) is calculated as:
5! = 5 × 4 × 3 × 2 × 1 = 120

---

### Option 1: Using the `math` module (Recommended for simplicity and efficiency)

Python's built-in `math` module has a dedicated `factorial()` function, which is the most straightforward and efficient way.

```python
import math

# The number for which we want to calculate the factorial
number = 5

# Calculate the factorial using math.factorial()
factorial_result = math.factorial(number)

# Print the result
print(f"The number is: {number}")
print(f"The factorial of {number} is: {factorial_result}")

```

---

### Option 2: Using a `for` loop (Iterative method)

This method shows how you would calculate it manually using a loop.

```python
# The number for which we want to calculate the factorial
number = 5

# Initialize factorial_result to 1
# This is important because:
# 1. 0! (factorial of 0) is 1.
# 2. It's the multiplicative identity, so multiplying by 1 doesn't change the first product.
factorial_result = 1

# Factorial is only defined for non-negative integers.
# Let's add a basic check for robustness, even though we know number = 5.
if number < 0:
    print("Factorial is not defined for negative numbers.")
elif number == 0:
    print(f"The factorial of {number} is: 1")
else:
    # Loop from 1 up to the number (inclusive)
    for i in range(1, number + 1):
        factorial_result *= i # Multiply factorial_result by i in each iteration
    
    # Print the result
    print(f"The number is: {number}")
    print(f"The factorial of {number} is: {factorial_result}")

```

---

### Option 3: Using a Recursive Function

Recursion is another common way to define factorial, where a function calls itself.

```python
# Define a recursive function to calculate factorial
def calculate_factorial_recursive(n):
    if n < 0:
        return "Factorial is not defined for negative numbers."
    elif n == 0:
        return 1
    else:
        # Recursive step: n * (n-1)!
        return n * calculate_factorial_recursive(n - 1)

# The number for which we want to calculate the factorial
number = 5

# Calculate the factorial
factorial_result = calculate_factorial_recursive(number)

# Print the result
print(f"The number is: {number}")
print(f"The factorial of {number} is: {factorial_result}")

```

---

### How to Run Any of These Scripts:

1.  **Save:** Copy the code from one of the options above and save it in a file named `factorial_calculator.py` (or any other `.py` name).
2.  **Open Terminal/Command Prompt:** Navigate to the directory where you saved the file.
3.  **Run:** Execute the script using `python factorial_calculator.py`

All three scripts will output:

```
The number is: 5
The factorial of 5 is: 120
```
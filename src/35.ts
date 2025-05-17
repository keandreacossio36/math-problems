import sympy

# Define symbols
x, y = sympy.symbols('x y')

# Solve the equation for x in terms of y
solution = sympy.solve((2*x - 1)/(3*y + 4), x)
solution

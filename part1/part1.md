## Part 1a:
1. values added: 20
2. final result: 20
3. values added: 20
4. Code returns an error because we use the 'let' keyword to define result, we can only access result inside the block it is defined in.
5. Error because attempting to assign value to a const variable.
6. Error because attempting to assign value to a const variable.

## Part 1b:
1. 3, i is a var so we can log the var even after the for loop because the scope is the entire function.
2. 150, discountedPrice is a var so we can access it as long as it is inside the function.
3. 150, finalPrice is a var so we can access it as long as it is inside the function.
4. [50,100,150] is what will be returned by the function. The function essentially takes a % off of the given prices and in this case the function is taking 50% off of the original prices of [100,200,300] which what gets us [50,100,150].
5. 0 would be logged. 
6. Error: discountedPrice is undefined. This is because discountedPrice is defined with keyword 'let' so its scope is only inside the for-loop. Attempting to access the variable outside the for-loop gives us an error.
7. 150 would be logged. This is because the variable finalPrice is defined outside the for-loop so accessing the variable after the for-loop ends would just give us its current value at the time the for-loop terminates. 
8. Function returns [50,100,150]. This is because even though we cannot access certain variables by changing 'var' to 'let', the function overall still works the same by taking a % off given prices.
9. 0 would be logged.
10. 3 would be logged. This is because we set length to 3 at the beginning of the function.
11. The function would return [50,100,150] because it still works. This is because even though the variables are keyword 'const' the way we use it in the function allows the original intent to stay. For example, even though the array 'discounted' is a const we can still push to it, we just cannot reassign discounted. Also, the const discountedPrice is continuousally being created so the different values set to discountedPrice isn't actually reassigning the variable.
12. 
A. student.name;
B. student["Grad Year"];
C. student.greeting();
D. student['Favorite Teacher'].name;
E. student.courseLoad[0]
13. 
A. '3' + 2 = "32", ints map to string representation
B. '3' - 2 = 1, string '3' maps to 3 - 2
C. 3 + null = 3, null is equivalent to 0
D. '3' + null = "3null", string concatenation
E. true + 3 = 4, true maps to 1
F. false + null = 0, false maps to 0  
G. '3' + undefined = "3undefined', string concatenation
H. '3' - undefined = NaN, 
14. 
A. '2' > 1 = true, when comparing different types, JS converts to number
B. '2' < '12' = false, comparison in lexigraphical order
C. 2 == '2' = true, comparison of different types convert to number
D. 2 === '2' = false, different types
E. true == 2 = false, true is cast to 1
F. true === Boolean(2) = true, Boolean(2) is equivalent to true
15. The '==' operator checks for equivalence. However, in JavaScript, if the two data types are different then the data types are converted for equivalency. With the '===' operator, it checks for equivalency without conversion of types so using this operator with two different types will always yield a false. 
17. The result would be [2,4,6]. Essentially, when calling modifyArray, in the for-loop it is calling whatever function 'callback' is given the input 'array[i]' so the function doSomething(array[i]) is called multiple times doubling every number.
19. 1, 4, 3, 2
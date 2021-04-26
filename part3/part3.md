1. The bug is that num1 and num2 are stored as strings so when 'result = num1 + num2' it is adding strings rather than the integer values.
2. The fix was to first call parseInt on num1 and num2 to get them back to integers.
3. citylots.json
4. part2.js
5. 11.7 MB
6. 4.64s
7. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()
# DSA-Big-O
# 1 Constant time, one action one resultConstant time, one action one result,
Linear time. As the number of people increases, the steps increase at the same rate.

2 Even or odd 
What is the Big O of the following algorithm? Explain your answer
Constant time, because the number of operations doesn't change based on the input

3. Are you here 
O(n^2) Polynomial Time. For each n element in arr1 we have to perform k operations in arr2

4. Doubler
O(n) Linear time. We perform one operation per element in the array, so our operations grow at the same rate as the input.

5 Naive Search
O(n) Linear time. As the array grows, we perform one extra operation for each new element

6 Creating pairs: 
O(n^2) every additional value in the array add an ever increasing number of actions
going from length 5 to 6 for example adds 5 operation going from 6 to 7 adds and aditional 6 operation

7. Compute the sequence
O(n) Linear time. Adds the previous two answers together, creating a fibbonacci sequence

8. An efficient search
O(log n) because it is using Divide and Conquer to halve the input until it finds the item  

9. What is the Big O of the following algorithm? Explain your answer
O(1) constant time. Accessing an array by index doesn't require any iteration. 


10. What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer.
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
O(n) detemines is a number is prime.
Knowing something about primes this can be made better
First if if no factors smaller than square root exist no larger will exist as factors occur in pairs unless of course it is a square
As all primes except for 2 are odd and multiplying by an even number results in an even number it unnecessary to test them this would be O(log n)
```javascript
function isWhat(n) {
  let len = n ** .5
   let limit = Math.floor(len)
  if ((n < 2 || n % 1 !== 0 || n % 2 === 0) && n !== 2) {
        return false;
  } else if (Number.isInteger(len)) {
    return false;
  }
      
  for (let i = 3; i < limit; i+= 2) {
    if (n % i === 0) {

      return false;

    }
  }
 console.log(limit/2)
    return true;
}
```
Testing the 8th Mersenne prime, the inital way takes over 2 billion calculations
this a bit over 20,000

11. Tower of Hanoi
O(n^2) number of moves required is Disks^2 - 1


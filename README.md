# Stochastic-modeling

## 8.1
The generateNumber function is responsible for generating a random number and determining the response to a given yes or no question based on a probability value set by the user.

Here's how it works:

- First, it generates a random number between 0 and 1 using the Math.random() function and stores it in a variable called "a".
- Then, it compares "a" to the probability value stored in the "probA" state. If "a" is less than "probA", the response is considered "YES". Otherwise, the response is considered "NO".
- Depending on the result of the comparison, the "isTrue" state is updated to either true or false using the "setIsTrue" function.
- Finally, the random number generated in step 1 is stored in the "random" state using the "setRandom" function.
- Overall, the generateNumber function plays a key role in simulating a yes or no question and determining the response based on a probability value set by the user.

## 8.2 

- The generateNumber() function generates a random answer from a predefined list of possible answers. The function first defines an array of possible answers in the items variable, and a corresponding array of probabilities in the probabilities variable. Each probability represents the likelihood of the corresponding answer being selected.

- The selectItem() function uses these probabilities to select an answer. The function first generates a random number a between 0 and 1 using Math.random(). It then subtracts each probability in turn from a, and returns the corresponding answer when a falls below or equal to 0. This means that the probability of selecting each answer is proportional to its corresponding probability in the probabilities array.

- Together, these functions use a random number generator and probability distributions to provide a semi-random answer to the user's question. The probabilities assigned to each answer can be adjusted to reflect the likelihood of different outcomes, depending on the use case.

## 8.3 

- This code is a React application that generates random answers based on user-provided probabilities. It shows the generated data on a bar chart.

- The user is asked to input a number of times to generate random answers and four probabilities for four different events. The sum of the probabilities must be equal to or less than one. The application calculates the probability of the fifth event, which is not entered by the user, as one minus the sum of the entered probabilities.

- The generateNumber() function uses the provided probabilities to randomly generate answers. The selectItem() function selects a random answer based on the probabilities.

- The checkInputs() function checks if the required inputs have been provided by the user and whether the sum of the probabilities is less than or equal to one.

- If the user provides valid inputs and clicks on the start button, the generateNumber() function is called, and the application generates random answers based on the probabilities. It shows the generated data on a bar chart, where each bar represents the count of a particular answer.

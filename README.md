# Stochastic-modeling
[PreView / CodeSandBox](https://codesandbox.io/p/github/GeniusPRO271/Stochastic-modeling/main?layout=%257B%2522activeFilepath%2522%253A%2522%252FREADME.md%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522fullScreenDevtools%2522%253Afalse%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522vertical%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522DEVTOOLS_PANELS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clh3m46yi00093b6ls494tsiq%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clh3m46yi00093b6ls494tsiq%2522%253A%257B%2522id%2522%253A%2522clh3m46yi00093b6ls494tsiq%2522%252C%2522activeTabId%2522%253A%2522clh3m4cpg00b53b6lhw5a30sz%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clh3m4apr00693b6l3ll9v29m%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clh3m4cpg00b53b6lhw5a30sz%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%257D%252C%2522showSidebar%2522%253Atrue%252C%2522showDevtools%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%252C%2522editorPanelSize%2522%253A46.58484525080042%252C%2522devtoolsPanelSize%2522%253A35%257D)
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

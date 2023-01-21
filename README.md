# Hi there<img src="https://media.giphy.com/media/l4S95aLS28TNZDlzbX/giphy.gif" width="50" height="50"/>! Here goes below the assignment information

<div>
<h4 align="center"><a href="https://delivery-fee-calc.netlify.app/">Calculator :pager:</a></h4>
</div>

---

<h1 align="center">Wolt Summer 2023 Engineering Internships</h1>

<h3 align="left">Abstract: :speech_balloon:</h3>

<p align="left">
The goal of the assignment is to showcase coding skills and ability to develop features. My task is to create an app for a delivery fee calculator. This app is created to display when a customer is ready with their shopping cart, and it will be useful for them to see how much the delivery will cost. The delivery price depends on the cart value, the number of items in the cart, the time of the order, and the delivery distance. I gave priority to building and running the application smoothly to display the data to the end-to-end users.
</p>

---

<h3 align="left">Functional Requirements(Frontend): :bookmark:</h3>

```
The below-mentioned specification are given to submit this assignment. The tick-marked requirements that I met.

```

<h4 align="left" font="bold">Specification</h4>

<h4 align="left" font="bold">Rules for calculating a delivery fee</h4>

  - [x] If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.

  - [x] A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.

    * Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
    * Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
    * Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€

  - [x] If the number of items is five or more, an additional 50 cent surcharge is added for each item above five. An extra "bulk" fee applies for more than 12 items of 1,20€.

    * Example 1: If the number of items is 4, no extra surcharge
    * Example 2: If the number of items is 5, 50 cents surcharge is added
    * Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
    * Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)

  - [x] The delivery fee can never be more than 15€, including possible surcharges. <br />

  - [x] The delivery is free (0€) when the cart value is equal or more than 100€. <br />

  - [x] During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).

---

<h4 align="left" font="bold">Expectations</h4>

  * Fulfils the requirements explained above.
  * Well-tested and readable solution.

<h4 align="left" font="bold">Submission process</h4>

  * Bundle everything into a Zip archive and upload it to Google   Drive, Dropbox or similar and include the link in the application with allowing permission.

---

<h2 align="left">Frontend specifics: :sparkler:</h2>

<h4 align="left">Task</h4>

<p align="left">To build a delivery fee calculator web app using React and TypeScript.</p>

<h4 align="left">Specification</h4>
<p align="left">To build a delivery fee calculator app which calculates a delivery fee based on user input and shows the calculated delivery fee to the user.</p>

---
<h5 align="left">Input fields</h5>

| Field | Type | Description | Example value |
| --- | --- | --- | --- |
| Cart value | Float | Value of the shopping cart in euros. | 20 |
| Delivery distance | Integer | The distance between the store and customer’s location in meters. | 2235 (2235 meters = 2.235 km) |
| Number of items | Integer | The number of items in the customer's shopping cart. | 4 (customer has 4 items in the cart) |
| Order time | Date + Time | The date/time when the order is being made (see rules-section how rush hours affect the delivery price) | Can be chosen the most suitable format |

---

<h5 align="left">Output example</h5>
<p align="left">Open choice to design and implement the user interface. Below is an example of what it could look like.</p>
<p align="left">Code quality and structure of the app will be reviewed. Bonus points are allocated for good UX and design.</p>

<div>
<img width="440" alt="Screenshot 2023-01-17 at 7 08 47 PM" src="https://user-images.githubusercontent.com/89943976/212965672-34f1a87e-2d4d-4fb5-96e1-01d62400c8a7.png">
</div>

---

<h3 align="left">Technologies: :computer:</h3>

<h4 align="left" font="bold">App directory</h4>

`./delivery-fee-calculator`

`installation command react app:` `npx create-react-app delivery-fee-calculator --template typescript`

<ul>
<li>React</li>
<li>react-router-dom</li>
<li>TypeScript</li>
<li>CSS</li>
<li>Fort Awesome</li>
<li>MUI</li>
<li>@emotion/react</li>
<li>@emotion/styled</li>
<li>react-test-renderer</li>
<li>enzyme</li>
<li>enzyme-adapter-react-16</li>
</ul>

<h4 align="left" font="bold">Development Environment</h4>

<ul>
<li>VS Code</li>
</ul>

<h4 align="left" font="bold">Testing</h4>

<ul>
<li>Written Unit testing</li>
</ul>

<div>
<img width="1717" alt="test" src="https://user-images.githubusercontent.com/89943976/213326616-ee8e8f37-99f7-458a-b65d-a4bdc1f110db.png">
<div>

---

<h3 align="left"> Prerequisites: :gear:</h3>

```
To be able to set up and run the project needed to install it local computer and the required addresses to be used

```
<h4 align="left">Clone this repository</h4>

`https://github.com/koushik80/delivery-fee-calculator.git`

<h4 align="left">Enter the directory</h4>

`cd delivery-fee-calculator`

<h4 align="left">Install all dependencies</h4>

`npm install`

<h4 align="left">Run the application</h4>

`running frontend:` `npm start`

<h4 align="left">addresses</h4>

`Home:` `http://localhost:3000`

---

---

<div>
<h3 align="left">Project Gallery: :blue_car:</h3>
<p align="left">According to the requirements and based on user input the results came out as below:</p>

<div>
<img width="1717" alt="Screenshot 2023-01-19 at 9 37 12 PM" src="https://user-images.githubusercontent.com/89943976/213543607-41b2c8da-2b87-47ee-8936-fcbbff907eb6.png">
<img width="1717" alt="Screenshot 2023-01-19 at 9 38 09 PM" src="https://user-images.githubusercontent.com/89943976/213543614-48264823-ccf2-447d-93e8-c5df1a135d60.png">
<img width="1717" alt="Screenshot 2023-01-19 at 9 38 35 PM" src="https://user-images.githubusercontent.com/89943976/213543618-30598813-77fa-4f15-ba5b-08634bd7a288.png">
<img width="1717" alt="Screenshot 2023-01-19 at 9 39 05 PM" src="https://user-images.githubusercontent.com/89943976/213543620-67581dca-dc00-446e-91d4-ab30fa95fcde.png">
<img width="1717" alt="Screenshot 2023-01-19 at 9 39 31 PM" src="https://user-images.githubusercontent.com/89943976/213543622-08c61c4b-bf1a-4ca2-9d80-c0c7d42bdc96.png">
<img width="1717" alt="Screenshot 2023-01-19 at 9 39 56 PM" src="https://user-images.githubusercontent.com/89943976/213543625-f490b8e0-1ead-480a-9e84-e94230ecf5f7.png">
<img width="1712" alt="Screenshot 2023-01-21 at 4 26 22 PM" src="https://user-images.githubusercontent.com/89943976/213871321-338e1411-9951-43b5-b46b-ac5041f72eab.png">
<img width="1712" alt="Screenshot 2023-01-21 at 4 26 09 PM" src="https://user-images.githubusercontent.com/89943976/213871322-e7c1c77e-1512-4f87-9580-3ea8fbf46393.png">
</div>
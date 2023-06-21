# **Lithium Full Stack Engineer Tech Test**

This is a tech test for the role of full stack engineer at Lithium. We are somewhat tech agnostic, so feel free to use the tools, frameworks and packages you like. Although we are quite flexible in our tech choices, the language **must** be TypeScript for both the front end and back end, and the front end must be either React or NextJS (or a similar React-based meta-framework). At the end of the test you will be asked to explain your choices. 

## The Task

Lithium are expanding our system, and would like a portal for users to log in to. Before they log in though, they will need to be able to create an account. You will therefore need to create a back end to handle account creation and logging in, and the front end to enable them to create an account and log in. Once logged in, you just need to display "Hey `(user's full name)`!"

**Submission**

To start the test, please make an empty repo on your own personal GitHub with this readme file in the route directory and begin building the full stack app outlined above. Pushing at different intervals in the test will help us get an idea into your process, so please aim to do this. Don't feel pressure though - at Lithium we value speed, but understand this test will need to be undertaken in your own time and around other commitments, so rest assured the time, duration and frequency of these pushes **will not** be taken into consideration. That said, we will expect your submission to be completed no later than 5 days after receiving it.  

**What we're looking for**

This role will involve a fair level of independence - the right candidate will be able to own a feature from start to finish. This is why the choices of tech are left fairly open - we want to see you use your intuition and how you approach a problem. 

This is a full stack role, so please aim to make your submissions look *decent*. That being said, this is not a design job that you are applying for, so don't spend too long making it as beautiful as it can be - just try and use our current site's branding as a guideline and have your submission feel like it belongs. 

## When you've finished coding

After you have completed the task, please send us a .zip file of the repo, but fill in the section below, keeping this file in the root directory:

**Your name**

`Christian Jin`

**Why did you choose the tech you did?**

Nice to meet you!
I'm so glad to participate in this technical test for full stack engineer role.

This web application are built up with two parts.
1. Frontend Application (Developed with Next.js + Typescript)
2. Backend Application (Developed with Express + Mongoose + MongoDB(atlas))

As a huge fan of SSR, I've been working with Next.js for a long time and noticed that it's very useful to web applications which require quick loading as well as agile development.
Comparing Next against React, React is more flexible for real-time web applications like chat, messenger, streamline apps but Next is better for building web applications which consist of static layouts like e-commerce or blog websites. Using Next, we can ensure quick loading as well as significant reduction in bundle size by arranging client side components inside static layouts(server side components). In addition, Next supports a lot of built-in features like dynamic page routing, api routing, typescript support, image optimization and etc.
So this time, I've decided to go with Next since Lithium-Ventures is far away from real-time applications.

In frontend development, I used next-auth package which supports session management for both of server-side and frontend-side. NextAuth is very useful to implement authentication process without configuring any redux store like in React. And it works with api-route.
And for backend integration, I used Axios. Axios is powerful library. We can create axios instances for different backend integrations, manage response and request interceptors and set manual timeout. And also with axios, we can handle JSON serialization in a very easy step. For the purpose of scalability, Axios is better choice than any other built-in functions or libraries something like fetch or node-fetch.
You can also figure out there are two layouts(Rootlayout and GuestLayout) in the code base. The purpose of RootLayout is to use a static layout to decrease the bundle size and GuestLayout was built for handling page routings which require authentication. Once a user logged in, he or she can not access to pages which are wrapped by GuestLayout. In similar way we can build AuthLayout. The Rootlayout contains Banner section which is visible in every page. And that's why I decided to build a static layout.

In backend development, I used express.js + typescript since express.js is a light-weight backend framework compared with other node.js frameworks like Nest or something. Backend logic is very simple. We have 2 endpoints (auth/signin, auth/signup) and used MongoDB as a primary database. With the help of mongoose, I could easily handle database manipulation. I used cors module to get over cors policy issue and express.json to serialize json data in request body.

For now, I haven't implmeneted token feature since it's just a MVP and we can handle session on frontend application using AuthNext.

And to run this web application properly, you can follow readme files in 2 folders and make sure to tell me your ip address so that I can allow your ip to get access to my atlas database.

Thanks.
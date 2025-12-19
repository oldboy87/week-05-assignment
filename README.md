Tom says Hello!

Annabel says Hi!

Nene says Hawaiyu ^^

Rory says hi!

<!-- TEAM REFLECTION  -->

# PROJECT DETAILS

Project name: PantryPal
Render link: https://pantrypal-5zd7.onrender.com (client) & https://pantrypal-server-yyp8.onrender.com (server)
Repo link: https://github.com/oldboy87/week-05-assignment

Team members: Rory, Annabel, Tom, Nene

## PROJECT DESCRIPTION

PantryPal helps food businesses and community organisations easily track and manage their food stock. It simplifies stock management for staff and volunteers while reducing food waste and stock losses.

## PROBLEM DOMAIN

Offer our client an organised way to keep track of their food stock.
Our target audience are food businesses, like a pantry, café, foodbank, restaurant, etc.

## USER STORIES

Required:
As a user, I want to have an overview of my available stock
As a user, I want to be able to sort and filter by use by date
As a user, I want to be able to sort and filter by categories
As a user, I want to be able to add and remove stock
As a user, I want the app to be accessible and responsive on mobile phone

Optional:
As a user, I want to be able to filter by allergens (14 common food allergens)
As a user, I want to be able to scan stock in by barcode
As a user, I want to have a visual representation (image) of the stock
As a user, I want to manage incoming and outgoing stock
As a user, I want to be notified of low stock levels ( using RAG system)

## WIREFRAME

A list of any libraries, frameworks, or packages that your application requires in order to properly function:
Express.js, pg, cors...

## Instructions on how to run your app:

Navigate to the client link, use searchbar to find relevant item.
Use the add button to trigger a modal which allwos you to add an entry to the db.

## Lighthouse report:

Please see 'Lighthous report.jpg'

## Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.

Were there any requirements or goals that you were not quite able to achieve?

If so, could you please tell us what was it that you found difficult about these tasks?

What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.

<!-- RORY -->

In the group project, I mainly worked on CSS and wireframing. Once those tasks were completed, I began to step in and support other areas of the project where needed. Although I have worked in teams many times before and received formal leadership training at the Royal Navy Leadership Academy, I still learned a great deal from this experience. Building a full-stack application as a group highlighted many working parts that are often unseen, particularly how closely different areas of development depend on one another.

In hindsight, I think being very specific about responsibilities is essential. Rather than saying, “I’m turning the Figma design into HTML and CSS,” it would have been more effective to say, “I’m going to recreate this specific section from Figma, add these buttons to the HTML, and then we’ll make them dynamic.” Being more precise would have improved clarity and collaboration within the team.

<!-- ANNABEL -->

<!-- TOM -->

I think the two biggest obstacles we faced was that we all have very different methods of how we structure our code and we didn't allocate tasks with relational aspects in mind. For example: I had made and demonstrated a system where interactive elements of the screen can be dynamically generated using DOM manipulation with the intention that anybody who needs to insert interactive elements into dynamically generated containers (such as the modal form for adding items), however we all ended up kind of being isolated inside our own sections in the code. I don't think this was helped by issues we were facing with git as we were all nervous about causing merge conflicts! More practice in group projects should alleviate this concern, and with the power of hindsight I will certainly be going into my next group project wanting to discuss coding practices together to make sure we are on the same page.

There were certainly some design aspects of the project that I felt I didn't understand and I identify the reason as being I found it quite difficult to keep track of what's on trello, figma, discord chat, and meet. For example, Rory had made designs for the interface for editing items in the database that I hadn't seen because I failed to keep up to date with figma. It does highlight weak spots in our effective communication, but I believe we did have an overall strong sense of unity.

I mentioned earlier that I was handling DOM elements and the search functionality, but in hindsight I should have handled generating table elements as this was also done with DOM. It would have made more sense that search functionality should have instead been handled by team members who were interfacing with the database.

When we had catastrophic database problems on the final day, I ended up spending a lot of time on the table generation to try and assign IDs to implement edit buttons that would sit next to the populate rows and read the corresponding row directly, feeding that into Annabel's code so we could repurpose the Add Item form to also work as an edit form. But due to differences in coding practices, this was a very difficult task and I wasn't able to complete it in time. Again, this highlights the importance of identifying which aspects of our code are going to be directly related and how it would be better to assign our roles based on that.

<!-- NENE -->

I believe we met the requirements of the assignment in terms of all deliverables - we have a deployed site, with the code uploaded to GitHub showing clear contribution from all team members. Our Trello board shows proof of our daily meetings and task silos. We have attached files for our database activity and completed a comprehensive project presentation. We encountered numerous challenges when it came to teamwork - planning, execution, plumbing code together and even simply agreeing on features became a more difficult task than it would be on a solo project.

I was mainly involved in the project management, feature planning, and the DOM table for the database to reflect on the frontend and I must say that trying to understand new ways of coding, whilst trying to learn your team, whilst trying to manage your workload and still be rested is very challenging. Much has been learned along the way in terms of managing different ways of working - more in-depth planning of tasks and pairing people together for tasks more. Even the sequence of working, starting in HTML and JS before CSS could perhaps have been beneficial. Overall, I think I walked away with much insight around the overlap between management and full stack development and I think I am more sure than ever than being in a tech management role e.g. Client Tech Lead, Solutions Architecture, DevOps is absolutely my cup of tea. Thank you for the opportunity.

## REFERENCES

All assets used in this project were created by Rory. We used no external APIs or packages beyond cors/express/vite/pg/dotenv
See 'queries.sql' for our DB queries and 'inventory.csv' to see our seed data for the db.

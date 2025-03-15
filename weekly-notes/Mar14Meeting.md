**Overview: Weekly check in to prepare for FGP4 meeting with TA Ayush Bhardwaj**
When: March 14th @ 445pm  
Duration: 2 hours
Where: Virtual 

Attendance: Angela Lojko, Oli Kosiacki, Thomas Webber 
Late: N/A
Missing: N/A

Recent Progress: Finalized on idea and the specifications for our FGP4 Milestone meeting

**Meeting Minutes:**
- Oli has started working on the rough sketch of the applications layout, features, and functions and will push that to the GitHub once finalized
- Data structures considered B-Trees, Trie, Splay Tree, Priority Queue and discussed the benefits and the implementation of each structure for our program
- Discussed ideas on what features we want our application to have 
- Oli posed an idea on dish tags (location, ingredients, etc)
- Discussed the timeline and how we want to progress moving forward
- Virtual meeting scheduled on Monday from 3-4pm to finalize minor detail 

**<ins>Github revisions and contributions</ins>**
- All team members have put in nearly the same amount of‬‭ effort‬‭ in contributions since the last FGP‬ check-in.‬
  - Angela updated meeting minutes, Oli uploaded the design, Thomas uploaded the google document we had during our meeting
- The team has met at least three times, once each week on 03/03, 03/10, and 03/17, and has‬ submitted the notes from each meeting to their GitHub repo.‬
  - Virtual meetings on March 06 and March 14 (for further details please refer to meeting notes
- Team shares how they plan on continuing or improving the balance of project work.‬
  - Thomas is responsible for back-end
  - Oli is responsible for front-end
  - Angela will oversee project management logistics.
  - Angela will jump in and assist either Thomas or Oli when needed.
- Each team member has contributed at least once on GitHub since the last FGP check-in.
   - Ang -- meeting notes
   - Thomas -- draft google doc
   - Oli -- design 
   

**‭<ins>Full Stack Application‬ Idea & Scope</ins>‬**
- Idea solves a real problem that contributes positively to society and the community.‬‭
  - Preserving culture and allowing people to learn more about culture by exploring recipes 

- The team shares at a minimum a rough sketch or written plan of the application's layout, features,‬ and functionality.‬
  - Oli will handle this portion and upload the wireframe, design, plan on github 

- Team shares any possible ethical issues related to their solution and how they will reduce any‬ negative impacts.‬
  -  Oli stated if we web scrape random recipes might lose cultural context so might need to research cultural history 
		  - consider a blimp or a page that brings in the history 
		  - if we use a PQ to get the top 10 — the diversity of dishes gets lost 
	- Altering the recipes may lose its meaning if recipes are altered, however with the front end design where we show some history to the using our application and explain the reasoning for the ingredients and why they are used 


- Team has a breakdown of what they plan to achieve each week before the project deadline.‬‭
  - **<ins>Timeline: </ins>**
    - This week 03/09 — 03/14  — 
      - plan the logistics (database, structures, visualization) 
    - Next week 03/15 — 03/22 —
      - Thomas will do research on Django
      - Oli will do research on React
      - Angela will do research on both (react and django)
    - Spring Week 03/23 - 03/29 —
      - Backend – Thomas will start coding the back-end
      - Frontend – Oli will start working on the front end
    - 03/30 - 04/05 —  April 03rd rough draft due (one page routing)
      - Frontend – Oli will aim to have front end with function input and output on the front end
      - Backend – Thomas will aim to have the data pulled in from the API and stored into the data structure
    - 04/06 - 04/12 —
      - Frontend – Oli will focus on making dishes on the main page reroute to each recipes individual page where recipe and cultural significance is shown
      - Backend – Thomas will pull in the data for the cultural history regarding the dishes
    - 04/13 - 04/26 – April 22nd polished draft
      - Frontend – aim to have multiple page routing and connected to back end
      - Backend – have data completely pulled in completely; all recipes will have external data stored in our internal database
    - Project completion for April 27th
    - Practice April 28th for presentation 

**<ins>Data Source &‬ Backend‬ Integration‬</ins>**
- The data source is clearly identified and appropriate for the application.‬‭
  - Angela found an API database that has different recipes that could be used for the data (https://therecipedb.vercel.app/)
  - Map API 

- Team explains how data will be pulled into the backend.
- Team describes any necessary data processing or cleaning before use.‬‭
	-  Will have to clean the data and get only Polish-based recipes
   
**<ins>Choice & Fit of‬ Data‬ Structures‬</ins>**
- Application uses at least two advanced data structures.‬
  - We will use a Trie for one of the data structures in our project 

- Usage of each advanced data structure in application is explained and why it is optimal.‬‭
    - Tries: (search bar)
      - Autocompletes off of the weights
    - Either these two:
      - Priority Queue (spinning thing)
      - Pagination
      - Display top K popular dishes
      - The more users click on a dish, the weight goes up
      - Display bottom K popular dishes


- Alternative data structures that were considered but ultimately not chosen for each use case are‬ explained.‬
  - Splay Trees (Not chosen)
    - Most popular dishes are at the top
    - One page of the web app can display leaf nodes which have the lowest popular dishes
    - User unpredictability could lead to bad time efficiency as looking up obscure/unpopular recipes brings those recipe nodes to the top

‭
**Action Items (Work In Progress):**
  - Thomas will do research on Django
  -  Oli will do research on React and finalize the design 
  -  Angela will do research on both (react and django)

**<ins>Next meeting: Monday March 17th at 3pm**

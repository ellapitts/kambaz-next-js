import Image from 'next/image';

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <p>Ella Pitts - CS5610 Web Development Section 04</p>
      
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">{/* TODO: CHANGE */}
        <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. 
Each section is usually prefaced with a short title or heading that attempts to summarize 
the topic of the section it precedes. 
For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
      
<div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>
      
      {/*Making Pizza Ordered List*/}
      <h4>List Tags </h4>
      <h5>Ordered List Tag</h5>
      How to make pizza:
      <ol id="wd-pizza-recipe"></ol>
      <li>Preheat the oven to 450 degrees</li>
      <li>Take your pizza dough and roll it on the counter to twelve inches</li>
      <li>Spread tomato sauce on the dough</li>
      <li>Add cheese and toppings of your choice</li>
      <li>Bake the pizza in the oven for 15 minutes</li>
      <li>Take pizza out of the oven, and place on a cooling wrack</li>
      <li>Wait 5 minutes before enjoying!</li>


    {/*Unordered List Tag. WRITE A LIST OF AT LEAST 3 OF YOUR FAVORITE BOOKS*/}

    {/*TABLE SECTION: 
    This course has 10 quizzes. 
    Add the 7 quizzes that are missing in the table. 
    Use quiz names such as Q3, Q4, through Q10.
     Make up different dates and scores. */}
   <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr> ... </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

   
  {/*IMAGE TAG*/}
  <div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet: <br />
  <img id="wd-starship" width="400px"   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
  <br />
  <Image id="wd-teslabot" src="/teslabot.jpg" alt="Teslabot robot" height={200} width={200} /></div>
  <br />
  <img id="wd-teslabot" src="teslabot.jpg" height="200px" /></div>

  {/*cCREATING WEB FORMS -- SAMPLE CODE FROM PROFESSOR*/}
  <div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" defaultValue="123@#$asd"
           id="wd-text-fields-password" /><br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" placeholder="Doe"
           defaultValue="Wonderland"
           title="The last name"
           id="wd-text-fields-last-name" />
    {/* copy rest of form elements here  */}
  </form>
</div>

  {/*TEXT AREA  -- SAMPLE CODE FROM PROFESSOR*/}
  <h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>


    </div>);}

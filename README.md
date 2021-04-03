# notes-app
Node.js implementation of a basic **Note taking app**.

**To run locally:**
1. Clone the repository and ensure you have Node.js installed.
2. npm install
3. The functionalities provided are - Adding a note, Removing a note, Listing all notes, and Reading a particular note. The notes are stored in .json format with a title and body attribute and the functionality is provided via command line arguments

Example Usage:

**-> Adding a note:**
   node app.js add --title='test' --body='testing app'
   
**-> Removing a note:**
   node app.js remove --title='test'
   
**-> Listing all notes:**
   node app.js list
   
**-> Reading a particular note:**
   node app.js read --title='test'
   
**Edge cases that have been handled:**
   1. Adding new note with pre-existing title
   2. Removing note by providing a title that doesn't exist
   3. Attempting to read a note by providing a title that doesn't exist
 
 



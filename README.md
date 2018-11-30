# Kudos

Kudos is a a MongoDB-based application that allows users to send positive messages, or kudos' (derived from the ancient Greek  κῦδος meaning 'praise' or 'renown') to one another. 

##How To Use:
  1. Click the 'Give Kudos!' button at the top of the page.
  2. Select 'Sender' and 'Receiver'
  3. Type in a a title and message.
  4. Click 'It's Kudos Time!', and you're done.
  
Functionality: 
  1. If you cancel or exit the modal at any time before submission, the inputs auto-clear and reset to the default selections of 'Pick!'        and 'Choose!'
  2. If you do not pick existing users (formatting prevents the defaults from counting) or do not type in a title/message, formatting will      display a warning so that no incomplete kudos will be sent.
  3. The kudos are simultaneously sent to the database for storange and dynamically rendered to the page, so there is no need to refresh to      see the displays.
  
 Technology:
  1. The main technology of this page is MongoDB. Using Mongoose, models were constructed so that user inputs could be properly converted        to BSON and stored. 
  2. Taking advantage of MongoDB linking, the unique sender ID was also sent along so that the kudos ID could be dynamically stored to an        array on the sender object, thus allowing an administrator to pull up all a sender's message history through his/her ID.
  3. Database call functions were constructed using the Node and Express applications. Some were integrated into the UI (such as GET to          retrieve information and POST to store kudos). Others were kept unintegrated as more backend administrator functions (such as POST to      create new users and mass GET functions for all available info).
  4. The UI was constructed using Boostrap structuring with customized CSS added on as needed. As such, the entire page is mobile                responsive to even less than 400px in width.
  
  Future Development:
    1. The first functionality would be to add in login features. This way, each user could only send kudos under their own name. 
    2. This naturally ties into a sign-in function that allows new users to create profiles and begin posting.
    3. Some sort of categorization system could be implemented to filter what kudos are being displayed.
  
  NOTE: I discovered an interesting bug between MongoDB and Heroku. During my local usage, I was able to pass the kudos ID (formatted as         id: ObjectId("2rq058hqo3ih4lqy3")) to an array on the sender object. However, when running from Heroku, the data is instead             stored as an oddly-named object (formatted as "id": {"$oid": "2rq058hqo3ih4lqy3"}). The result is that the local-version does           not work on Heroku and vise versa. While this does not affect the current build's functionality, it does impede future                   development and raise questions as to just what is going on behind the Heroku scenes.

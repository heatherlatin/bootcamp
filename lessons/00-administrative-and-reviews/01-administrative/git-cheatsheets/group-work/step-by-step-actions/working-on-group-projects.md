# Real Life Git Branching Plan

* [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

# One simpler strategy:

* Each team member makes their own branch.  (e.g. "_taylor_")

* Whenever a team member finishes a task they will follow our commit and push process:

    * ``` git add . ```

    * ``` git commit -m "message describing the task" ```

    * ``` git push origin taylor ``` but replace "_taylor_" with your branch

* Then they will go to github.com and navigate to your group's repository.

* Find the button that says "New pull request" or click on the yellow box with your branch name if it shows up where it says "Compare and pull request"

    * base should be master -> this is what you are merging into

    * compare should be _taylor_ -> your branch that you made changes to

    * review the changes at the bottom, ensure they look like what you wanted on master.

        * make any changes as needed before creating pull request (e.g. remove commented out code) if any changes were made follow the commit and push process above before finishing the pull request.

    * if your code looks good to go, fill out the pull request title/comment and click "Create pull request"

* The next most important part: have your teammates review the code!  Send them a link to the pull request, and have them read it over.

    * if they see anything wrong/odd they can add their comment on the line of code they see as weird.

    * if any changes need to be made, the person whose branch it is can work off their branch _taylor_ (but their name) and follow the commit/push process above, and the pull request will automatically update after pushing.

    * review and change as many times as necessary until code is good to go.

    * when good to go, have everyone sign off by commenting something on it like :+1: or "looks good!"

    * then click the button in github that says "Merge pull request"

        * add a comment if necessary then click "Confirm merge"

* After merging pull request everyone should do what we do for class:

    * git commit/push process:

        * ``` git add . ```

        * ``` git commit -m "message describing the task" ```

        * ``` git push origin taylor ``` but replace "_taylor_" with your branch

    * ``` git fetch ```

    * ``` git merge origin/master ```

    * and deal with any merge conflicts that pop up

# Merge conflicts

## VS Code

* navigate to the files in conflict in VS Code.

    * It will highlight conflicts saying if something is an incomming change (from master) or a current change (your branch) and you will have to decide what to keep and what to delete (sometimes it is keep both!) when you are done delete the entire lines that have ``` >>>>>>>>>>>>>>> ``` or ``` <<<<<<<<<<<<<<< ``` or ``` ============= ```

    * when you are done save the files

    * do git commit/push process from above

## Git Kraken

* click on the conflict file with the exclamation mark.

    * choose left (current your branch) or right (incomming master) checkbox if you just want one set of the code or select both if you want both.  (output will show at the bottom, and the order in which you click is the order it is added to the page!)

    * if you want to further edit, open the file in VS Code.
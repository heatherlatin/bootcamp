# GIT Cheat Sheet - **Homework**

## Homework

We will be using github.com to post our homework assignments' solutions.

### Creating a github repository

First thing we will do to start working on homework will be to create a github repository on github's website.

1. Go to [github](https://github.com) and login.

2. Click the + button in top right

3. Select new repository

4. Fill out the information (name can match homework name) and make sure to select initialize repository with a README.
    * **IMPORTANT** name should not have spaces.

5. Click "Create Repository"

### Clone the repository onto your machine

After creating it on github.com we need to now get the folder onto our local machine (our computers)

1. In Github go to the main page for your new repository

2. Click the green button to clone repository.

    a. If you have set up SSH you can switch the clone to SSH by clicking "Use SSH"

    b. You can also just use HTTPS without setting up SSH, whatever you prefer.

    c. Copy the link

3. Go to a terminal and navigate to the folder you want your repository folder to be in. e.g.
    ```
    cd ~/Documents
    ```

4. run the following command, but replace "copiedlink" with what you copied from the above step
    ```
    git clone copiedlink
    ```

5. then change directories into the newly created folder e.g. if you named your repository HW-Wireframe, you would have created a folder named HW-Wireframe when you cloned your repository so you would then type:
    ```
    cd HW-Wireframe
    ```

6. **IMPORTANT:** before making any files or changes we want to create and switch to a branch called gh-pages. 
    ```
    git checkout -b gh-pages
    ```

### Working in Your Repository

To work in our repository we want to regular make commits to make sure we have restore points we can go back to if we mess up.

1. git add command is used to prepare each intended change for commit (think of commits as saving a checkpoint) to do the git add command you can type the following for each changed file:
    ```
    git add <path-to-file>
    ```
    This prepares the change to be committed.
    
    You can also add all changes in a folder with:
    ```
    git add .
    ```
    **WARNING** - Doing it the above way could lead unintended changes to be committed, be sure to review every change before committing for good practice.

2. git commit command is used to create a checkpoint that you can always get back to.  It is good to git commit often so you can revert code if you really mess up
    ```
    git commit -m "message saying what you did"
    ```

## WHEN FINISHED: Request a Code Review and Submit Homework

1. when we are ready to publish our website and share it with others:
```
git push origin gh-pages
```

2. Go to your homework repository on github

3. Locate the "New pull request" button on the screen, it is below the bar that says "# commits" "# branches" "# releases" "#contributor" on the left hand side.  Click on it.

4. ensure the left hand side button says "base: master" and click on the right hand side button and change it to "compare: gh-pages"

5. fill out a title and a comment describing what you've done for your homework.

6. Click "Create pull request"

7. Copy link for pull request and paste into bootcamp spot. (e.g. https://github.com/jtblanche/HW-Wireframe/pull/1)

8. Go to your repository's settings and find the github pages link and check that that is working, then paste it into bootcamp spot as well. (e.g. https://jtblanche.github.io/HW-Wireframe)
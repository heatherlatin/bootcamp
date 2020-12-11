# GIT Cheat Sheet - **Classwork**

## Class Repository

### Getting Started

For our class we will be using gitlab to maintain all of the class information.  This is your book for the class, you can find it at [this link.](https://uci.bootcampcontent.com/UCI-Coding-Bootcamp/uciirv201906fsf1-ft)

#### Before Download

##### Git LFS

We use git lfs to manage large files in our git repository, this will be necessary to see powerpoints, gifs, and more.

1. Installation:
    * Go to [Git LFS](https://git-lfs.github.com/)
    * Follow the instructions there to install git lfs on your machine.

#### Downloading the repository

Every time you need to get the repository on a new computer for the first time, follow these steps:

1. Navigate in the terminal to a folder you want the repository to live in (don't create a folder for it, the next steps will cover this.).
    * e.g. if you want it in your Documents folder:
    ```
    cd ~
    cd Documents
    ```
2. Clone the repository to your machine with the following command 
    ``` 
    git clone https://uci.bootcampcontent.com/UCI-Coding-Bootcamp/uciirv201906fsf1-ft.git 
    ```
3. It might be nice to rename the newly created folder from ```uciirv201906fsf1-ft``` to something like ```class-material``` so that when you are done your folder would be stored in your documents in a folder named ```class-material```.  You can rename a folder by using explorer or finder and just renaming it by right clicking and click "rename folder" option.
4. To do any git operations on the git repository our terminal has to be currently inside of our recently cloned git folder.  If you followed all of the steps above and renamed your folder, you can make your terminal pointed to it by typing 
    ```
    cd class-material
    ```
    or if you didn't rename your repository:
    ```
    cd uciirv201906fsf1-ft
    ```

5. **IMPORTANT** - This needs to be done once, when you first clone a repository.  This initializes git lfs for your repository.  Run the following commands in the terminal:
    ```
    git lfs install
    ```
    ```
    git lfs fetch
    ```
    ```
    git lfs pull
    ```
    You shouldn't need to do these steps again, unless you clone the class repository again.

6. **IMPORTANT** - One operation you should do to ensure you don't edit MY branch is create your own branch in git.  Branches are used to make your own workspace where you won't affect anyone else's code.  To do this run this command:
    ```
    git checkout -b <your-name-here>
    ```
    e.g.
    ```
    git checkout -b taylor-blanche
    ```

### Workspace Setup

Workspaces can really help to streamline activity work.

1. For ease, have the entire class repository open in ```Visual Studio Code```. To open it in ```Visual Studio Code``` you can make a workspace by going to 
    ```
    File > Add Folder to Workspace...
    ```
    And find the class repository on your machine e.g. ```<user-path>/Documents/class-material```
    If you open this whole folder it will be much easier to follow along as we move from activity to activity.  It also is very helpful to reference past activities to help with current activities.
2. You can save this workspace by going to
    ```
    File > Save Workspace As...
    ```
    If you save the workspace it'll be easier to open up where you are working every day by going to 
    ```
    File > Open Workspace
    ```

### Daily Routine

Every day we will work on many activities, as we work on them we will add to the git repository the solutions.  To keep your branch up to date with the solutions you will need to follow these steps after every activity (make sure your terminal is inside of the class repository):
    
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
3. git fetch command is used to let your machine know what is happening on the remote repository (in this case git lab) so run git fetch before the next command.  This command won't change any code on your machine, but you should run it before any merge.
    ```
    git fetch
    ```
4. git merge command is used to merge changes from one branch into your current branch, we can use it to merge from the remote repository too by adding origin/ before our branch name for the class repository we will run:
    ```
    git merge origin/master -m "merge to class"
    ```

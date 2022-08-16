# TKS-Random-Password-Generator

## Description

This a random password generator tool. It is capable of generating completely unique passwords based on user parameters. Users can choose the length (from 8 to 128 characters), and whether they want to include certain character types (lowercase, uppercase, numbers, special characters). The password will then automatically generate and display on the screen for the user to copy or write down. This password generator is designed in such a way so that there are never any repeating or discernable patterns in the password that is generated.  
  
The user friendly interface means that this tool is accessable to anyone with any technical ability. The choice of password complexity also offers more flexible options for users to further improve accessibility and to also help the generated password meet any criteria needed.  
  
This project was built with more accessible password security in mind. Anyone with any technical ability should have access to heightened security to protect their devices and information.

## Installation for development environment

1. Clone the repository from github (https://github.com/Tim-KS/TKS-Random-Password-Generator.git)
2. Open "index.html" to access the application
3. Right click on parent file and select "Open with Code" to access the code

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```
### 1. Once on the landing page, press generate to start the process
![Landing page](main/Assets/images/Default.png)
### 2. Enter the desired password length
![Password length prompt](main/Assets/images/Parameter1.png)
### 3. Select password character types as needed (lowercase prompt in example)
![Password parameters](main/Assets/images/Parameter2.png)
### 4. Password will generate on screen once all prompts are complete, you will be able to copy it wherever desired
![Completed password displayed](main/Assets/images/FinishedEgAllData.png)

## Error messages
- ### When entering a number that is outside 8 and 128 characters, you will get the following error.
![Invalid password length](main/Assets/images/invalidLength.png)
- ### When entering an invalid character into the password length (a letter or a special character), you will get the following error.
![Invalid character in length](main/Assets/images/InvalidChar.png)
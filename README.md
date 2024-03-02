<p align="center"> <img src="icons/JIRAOpen128.png"> </p>

<h1 align="center"> JIRA OPEN </h1>

<p align="justify">

This is a Chrome Extension which is used to open multiple JIRA IDs either as multiple tabs or as a filter in JIRA.

</p>

### HOW TO USE JIRA OPEN

- Download and Extract the files to a location or Clone this repository to your local area using

  `git clone https://github.com/theadisingh/Jira-Open.git`

- Open Google Chrome. Go to Settings > Extensions
- Turn ON `Developer Mode` on top right.
- Click on `Load unpacked` and point it to the downloaded/cloned repository.

### HOW TO CHANGE JIRA URL

- Navigate to the file `popup.js`
- Modify the line 10 & line 32 to a suitable URL

```js
// Line 10 (For Tabs)
const url = `<https://jira.com/browse/>${jiraNumber.toUpperCase()}`;
// Line 32 (For Filter)
const url = `https://jira.com/issues/?filter=-2&jql=key%20in%20(${filter})`;
```

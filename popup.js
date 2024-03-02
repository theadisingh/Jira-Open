document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("openJIRAsButton")
		.addEventListener("click", async () => {
			const jiraNumbers = document
				.getElementById("jiraNumbers")
				.value.trim()
				.split(/\s+/);
			for (const jiraNumber of jiraNumbers) {
				const url = `https://jira.com/browse/${jiraNumber.toUpperCase()}`;
				try {
					await chrome.tabs.create({ url });
				} catch (error) {
					console.error("Error opening JIRA:", error);
				}
			}
		});
	document
		.getElementById("filterJIRAsButton")
		.addEventListener("click", async () => {
			const jiraNumbers = document
				.getElementById("jiraNumbers")
				.value.trim()
				.split(/\s+/);
			var filter = "";
			for (var i = 0; i < jiraNumbers.length; i++) {
				filter += jiraNumbers[i];
				if (i < jiraNumbers.length - 1) {
					filter += "%2C%20";
				}
			}
			const url = `https://jira.com/issues/?filter=-2&jql=key%20in%20(${filter})`;
			try {
				await chrome.tabs.create({ url });
			} catch (error) {
				console.error("Error opening JIRA:", error);
			}
		});
});

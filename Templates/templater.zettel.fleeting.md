<%*
// Generate unique ID with timestamp and random component
const now = tp.date.now();
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const randomComponent = Math.floor(Math.random() * 900) + 100; // 3-digit random number
const uniqueId = `${timestamp}-${randomComponent}`;

// Prompt user for note content
const content = await tp.system.prompt("Enter your fleeting note content:");
if (!content) {
    throw new Error("Fleeting note cancelled - no content provided");
}

// Optional: Prompt for source/context
const source = await tp.system.prompt("Source or context (optional):", "", true);

// Create the frontmatter and content
tR += `---
id: ${uniqueId}
created: ${now}
type: fleeting
tags:
  - fleeting
source: ${source || ""}
processed: false
---

# Fleeting Note - ${uniqueId}

## Content

${content}

## Processing Notes

_Use this section to develop the idea further when promoting to permanent note_

---

## Connections

_Link to related permanent notes or other fleeting notes_

## Next Actions

- [ ] Review and decide if this should become a permanent note
- [ ] Connect to existing knowledge structures
- [ ] Archive if no longer relevant

`;

// Set the filename based on the unique ID
await tp.file.rename(`${uniqueId} - Fleeting Note`);

// Move the file to the Fleeting folder
const fleetingPath = "Zettelkasten/Fleeting/" + tp.file.title;
await tp.file.move(fleetingPath);
%>
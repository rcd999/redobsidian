/**
 * QuickAdd compatible script for creating fleeting notes
 * Can be used as a QuickAdd macro or called directly
 */

function createFleetingNote(params) {
    // Generate unique ID with timestamp and random component
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/[-:T]/g, '').replace(/(\d{8})(\d{6})/, '$1-$2');
    const randomComponent = Math.floor(Math.random() * 900) + 100;
    const uniqueId = `${timestamp}-${randomComponent}`;
    
    // Get content from QuickAdd variables or prompt
    const content = params?.variables?.content || "Enter your fleeting note content here";
    const source = params?.variables?.source || "";
    
    // Create filename
    const filename = `${uniqueId} - Fleeting Note`;
    
    // Create the note content
    const noteContent = `---
id: ${uniqueId}
created: ${now.toISOString()}
type: fleeting
tags:
  - fleeting
source: ${source}
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

    // Return the configuration for QuickAdd
    return {
        filename: filename,
        content: noteContent,
        folder: "Zettelkasten/Fleeting",
        openFile: true
    };
}

// Export for QuickAdd
module.exports = createFleetingNote;

// For direct usage in Obsidian scripts
if (typeof window !== 'undefined' && window.app) {
    // Direct Obsidian API usage
    function createFleetingNoteObsidian() {
        const { app } = window;
        const result = createFleetingNote();
        
        // Create the file
        const filePath = `${result.folder}/${result.filename}.md`;
        app.vault.create(filePath, result.content).then(() => {
            if (result.openFile) {
                app.workspace.openLinkText(filePath, '', false);
            }
        });
    }
    
    // Expose to global scope for command usage
    window.createFleetingNote = createFleetingNoteObsidian;
}
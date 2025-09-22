# Zettelkasten

This folder contains the Zettelkasten (slip-box) system for managing knowledge and ideas.

## Structure

- **Fleeting/**: Temporary notes for quick capture of ideas and thoughts
  - Use the `templater.zettel.fleeting.md` template to create new fleeting notes
  - Each note gets a unique ID with format: `YYYYMMDD-HHMMSS-XXX`
  - Tagged with `#fleeting` for easy filtering
  - Should be processed regularly and either promoted to permanent notes or archived

## Workflow

1. **Capture**: Use the fleeting note template to quickly capture ideas
2. **Process**: Regularly review fleeting notes
3. **Connect**: Link fleeting notes to existing knowledge structures
4. **Promote**: Convert valuable fleeting notes into permanent notes
5. **Archive**: Remove fleeting notes that are no longer relevant

## Using the Template

To create a new fleeting note:
1. Use the command palette (Ctrl/Cmd + P)
2. Search for "Templater: Create new note from template"
3. Select `templater.zettel.fleeting.md`
4. Enter your note content when prompted
5. Optionally add source/context information

The template will automatically:
- Generate a unique ID
- Set the creation timestamp
- Add appropriate tags
- Move the note to the Fleeting folder
- Provide structure for processing and connections
# Fleeting Notes Usage Guide

This guide explains how to use the fleeting notes system for quick capture in your Zettelkasten workflow.

## Quick Start

### Method 1: Using Templater (Recommended)

1. Open command palette (Ctrl/Cmd + P)
2. Search for "Templater: Create new note from template"
3. Select `templater.zettel.fleeting.md`
4. Enter your note content when prompted
5. Optionally add source/context information

The template will automatically:
- Generate a unique ID (format: YYYYMMDD-HHMMSS-XXX)
- Add creation timestamp
- Set appropriate tags
- Move the note to the Fleeting folder

### Method 2: Using QuickAdd (Optional)

If you have QuickAdd plugin installed, you can use the provided script:

1. Go to QuickAdd settings
2. Add a new macro
3. Point to `Scripts/createFleetingNote.js`
4. Configure variables for `content` and `source`
5. Assign a hotkey for instant access

### Method 3: Manual Creation

1. Create a new note in `Zettelkasten/Fleeting/`
2. Use the naming format: `YYYYMMDD-HHMMSS-XXX - Fleeting Note`
3. Copy the structure from the template

## Unique ID Format

Each fleeting note gets a unique identifier with the format:

```
YYYYMMDD-HHMMSS-XXX
```

Where:
- `YYYYMMDD`: Date (e.g., 20250122)
- `HHMMSS`: Time (e.g., 143027)
- `XXX`: Random 3-digit number (100-999)

Example: `20250122-143027-442`

## Note Structure

Each fleeting note contains:

- **Frontmatter**: Metadata with ID, creation date, tags, source
- **Content**: The main idea or thought
- **Processing Notes**: Space to develop the idea further
- **Connections**: Links to related notes
- **Next Actions**: Checklist for processing the note

## Processing Workflow

1. **Regular Review**: Check fleeting notes weekly
2. **Evaluate**: Decide if the idea is worth keeping
3. **Connect**: Link to existing permanent notes
4. **Promote**: Convert valuable ideas to permanent notes
5. **Archive**: Delete notes that are no longer relevant

## Finding Your Notes

Use these searches in Obsidian:

- All fleeting notes: `tag:#fleeting`
- Unprocessed notes: `tag:#fleeting processed:false`
- By date: `created:YYYY-MM-DD tag:#fleeting`

## Integration with Existing System

The fleeting notes system integrates with the existing Red Obsidian templates:

- Uses consistent tagging system (see `Tags/Fleeting.md`)
- Follows naming conventions from other templates
- Compatible with dataview queries
- Works with existing folder structure
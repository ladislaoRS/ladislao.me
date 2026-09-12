# Rule: Post-Implementation Change Summary

## Core Directive
Upon completing any code creation, modification, or refactoring in this workspace, the agent MUST always provide a clear, structured summary of what was changed.

## Detailed Protocol

1. **Mandatory Summary Delivery**:
   Immediately after all modifications and verifications are done, output a summary containing:
   - **Summary of Changes**: High-level overview of the functional and stylistic updates.
   - **Files Touched**: Clickable markdown links to every created or modified file with a brief note on what changed in each.
   - **Verification Status**: Results of builds (`npm run build`), tests, or lints run to confirm integrity.
   - **Next Steps / Review Points**: Clear pointers on what the user should check in their browser or test environment.

2. **Format & Tone**:
   - Concise, organized, and human-first (adhering to the Artisan philosophy).
   - Avoid dumping large blocks of code in the summary; reference specific files and symbols using markdown links.

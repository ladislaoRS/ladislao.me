# Rule: Plan-First & Explicit User Approval Gate

## Core Directive
Before editing, altering, or creating ANY code or files in this workspace, the agent MUST present an implementation plan first and obtain explicit user permission before proceeding.

## Detailed Protocol

1. **Strict No-Premature-Modification Policy**:
   - Never call `write_to_file`, `replace_file_content`, or run modifying shell commands on workspace code without prior plan review and user consent.
   - Read-only operations (`view_file`, `grep_search`, `find_by_name`, `list_dir`) are encouraged to inspect the codebase and prepare an accurate plan.

2. **Implementation Plan Requirements**:
   Whenever a user requests changes, new features, refactoring, or bug fixes, present a structured plan containing:
   - **Objective**: Concise statement of what will be accomplished.
   - **Proposed Changes**: Exact files to be created, modified, or deleted, along with the specific changes in each file.
   - **Design / Architectural Decisions**: Rationale behind key choices (conventions, naming, patterns).
   - **Verification Strategy**: How the changes will be tested or verified (e.g., build command, test command, browser check).

3. **Approval Request**:
   - Conclude the plan by explicitly asking the user for confirmation:
     *"Would you like me to proceed with this plan, or would you like to make adjustments?"*
   - Wait for the user's explicit approval before executing any file modifications.

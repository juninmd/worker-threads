```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines outline the principles and expectations for development of AGENTS.md, a repository for AI coding agents. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

All code within the AGENTS.md repository must be unique and contribute to a single, cohesive functionality. Avoid duplicating logic, data structures, or configurations across multiple files. Utilize functions, modules, and classes to promote reusability and maintainability.

## 2. KISS (Keep It Simple, Stupid)

Code should be as concise and understandable as possible. Prioritize clarity and avoid unnecessary complexity.  Strive for minimal code to achieve maximum effect.  Refactor complex code into simpler, well-documented units whenever possible.

## 3. SOLID Principles

While not explicitly enforced, the following SOLID principles will guide the design of AGENTS.md:

*   **Single Responsibility Principle:** Each class/module/function should have one, and only one, well-defined responsibility.
*   **Open/Closed Principle:** The system should be extensible through optional features without modifying existing functionality.  New functionality can be added through APIs or configuration.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Each interface should have only the dependencies necessary for its realization.
*   **Dependency Inversion Principle:** High-level modules should be replaced with low-level modules.

## 4. YAGNI (You Aren't Gonna Need It)

Avoid implementing features or components that are not currently required.  Focus on delivering working functionality.  Don't add functionality prematurely.  Refactor to remove unnecessary code before adding new elements.

## 5. Code Structure & Organization

*   **Modules:**  Break down the AGENTS.md repository into logical modules, each addressing a specific aspect of the agent system (e.g., data processing, communication, decision-making).
*   **Files:** Each file should contain a single, well-defined purpose.  Large files are discouraged.
*   **Comments:**  Provide clear and concise comments to explain complex logic, assumptions, and design decisions.  Comments should be kept to a minimum.
*   **Naming Conventions:** Consistent naming conventions will be used throughout the repository. (See standard naming convention document)

## 6.  Code Length Constraint (180 lines max)

*   Each file should not exceed 180 lines of code.
*   Code within functions and modules should be focused and efficient.

## 7.  Test Coverage Requirements (80%+)

*   All code written must achieve a minimum of 80% test coverage.
*   Unit tests should cover all critical functionality.
*   Integration tests should validate interactions between components.
*   End-to-end tests should simulate real-world scenarios.
*   Mocking/stubbing should be minimal, utilized solely for test development.

## 8.  Data Handling

*   Data structures should be well-defined, documented, and easily accessible.
*   Data is intended for internal use within the AGENTS.md system.
*   Consider data validation and error handling.

## 9.  Error Handling & Logging

*   Provide informative error messages and logging throughout the code.
*   Implement proper error handling to gracefully manage unexpected situations.
*   Log relevant events and debugging information.

## 10.  Documentation Requirements

*   Include a README file explaining the purpose of the repository and how to run the code.
*   Provide clear documentation for each module and class.

## 11.  Version Control

*   Use Git for version control.
*   Commit frequently with meaningful messages.
*   Utilize clear branch names.

## 12.  Code Style (Python-esque):

*   PEP 8 Style Guide – Follow closely.
*   Indentation: 4 spaces.
*   Line Length: 79 characters.

## 13.  Testing Framework Support

*   Ensure the codebase supports the specified testing frameworks.  (Specify which frameworks.)

## 14.  API Definition (if applicable):

*   If the AGENTS.md repository contains API definitions, they should be clearly defined and documented.

## 15.  Security Considerations:**

*   [Placeholder for security considerations document] - Details will be added as needed.

```
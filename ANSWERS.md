## How to Run
```
https://arooj56.github.io/Calculator-App/
```
---

## Stack & Design Choices

**Why plain HTML/CSS/JS?**
The task is simple enough that using React or Vue would be not approptiate. Plain JavaScript keeps the project lightweight and easy to understand without any build tools or setup.

**Two specific decisions:**

1. **Two-column layout**
   Used `display: flex` on `.main-box` so the input form stays on the left and results stay visible on the right at all times.

2. **Three preset tip buttons + custom input**
   Kept 10%, 15%, 20% buttons so common choices need zero typing. A custom input field below them handles any other percentage.

---

## Responsive & Accessibility

**360px phone:**
The `@media (max-width: 768px)` rule switches `.main-box` so the input card stacks above the result card and everything remains readable.

**1440px laptop:**
Both cards sit side by side, centered with `max-width: 900px` to avoid stretching too wide on large screens.
---

## AI Usage

- Claude: The initial output was functional but relied on simplified assumptions and did not properly handle type conversion and invalid input states consistently.
- I then modified the output by explicitly refining the prompt and using my own knowledge of this vanilla stack
- I also used AI suggestions for responsive layout ideas by giving a detailed prompt because typing code from scratch was not good option for such simple task.
---

## Gap:
- The error messages show up as plain red text using inline style="color:red;" directly in the HTML, which is not a clean approach

- I would move the error styling to style.css using a proper .error class, and add a small CSS transition so the message fades in instead of just appearing abruptly.

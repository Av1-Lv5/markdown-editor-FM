import { nanoid } from "nanoid";
import formatDate from "../utils/formatDate";

export const stressTestNote = {
  id: nanoid(),
  title: "Stress test",
  dateCreated: `${formatDate(new Date())}`,
  content:
    "# Markdown Preview Stress Test\n\n" +
    "> Blockquotes should look intentional, not like apologetic italics.  \n" +
    "> Nested ideas deserve visual hierarchy.\n\n" +
    "---\n\n" +
    "## Headings\n\n" +
    "# H1 — The Big Idea  \n" +
    "## H2 — Section Heading  \n" +
    "### H3 — Subsection  \n" +
    "#### H4 — Minor Heading  \n" +
    "##### H5 — Footnote Energy  \n" +
    "###### H6 — Whispered Text\n\n" +
    "---\n\n" +
    "## Text Styling\n\n" +
    "Normal paragraph text.  \n" +
    "**Bold text** for emphasis.  \n" +
    "*Italic text* for nuance.  \n" +
    "***Bold + Italic*** for drama.  \n" +
    "~~Strikethrough~~ for regret.  \n" +
    "`Inline code` for precision.\n\n" +
    "Escaped characters: \\* \\_ \\~ \\` \\#\n\n" +
    "---\n\n" +
    "## Paragraphs & Line Breaks\n\n" +
    "This is one paragraph. It should have comfortable line height and readable width.\n\n" +
    "This is another paragraph.  \n" +
    "This line uses a hard line break.\n\n" +
    "---\n\n" +
    "## Links\n\n" +
    "- Inline link: [OpenAI](https://openai.com)\n" +
    "- Autolink: https://example.com\n" +
    "- Reference link: [Markdown Guide][md]\n\n" +
    "[md]: https://www.markdownguide.org\n\n" +
    "---\n\n" +
    "## Lists\n\n" +
    "- Level 1\n" +
    "  - Level 2\n" +
    "    - Level 3\n\n" +
    "1. First item\n" +
    "2. Second item\n" +
    "3. Third item\n\n" +
    "- [x] Completed task\n" +
    "- [ ] Incomplete task\n\n" +
    "---\n\n" +
    "## Code Block\n\n" +
    "```js\n" +
    "function greet(name) {\n" +
    '  console.log("Hello, " + name);\n' +
    "}\n" +
    "\n" +
    'greet("Markdown");\n' +
    "```\n\n" +
    "---\n\n" +
    "## Table\n\n" +
    "| Feature | Supported | Notes |\n" +
    "|--------|-----------|-------|\n" +
    "| Tables | ✅ | Alignment matters |\n" +
    "| Code | ✅ | Syntax highlighting |\n\n" +
    "---\n\n" +
    "## Final Thoughts\n\n" +
    "If this renders cleanly, your preview pane is production-ready.\n",
};

"use strict";

var RuleTester = require("eslint").RuleTester;

var tester = new RuleTester();
tester.run("new-line-before-if", require("../rule/new-line-before-if"), {
    valid: [
        // if文の後が改行されていればOK
        "if (foo) {\n\n};\nif (bar) {\n\n}",
        "if (ifif()) {\n\n};\nif (bar) {\n\n}",
        "if (hoge) {\nhoge;\n}\nif (huga) {\nhuga;\n}"
    ],
    invalid: [
        // if文の後が改行されていなければNG
        {
            code: "if (hoge) {\n  hoge;\n  } if (huga) {\n  huga;\n  }",
            errors: ["There are no new lines before if."]
        }
    ]
});

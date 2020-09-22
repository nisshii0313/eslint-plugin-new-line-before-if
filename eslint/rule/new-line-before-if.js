/* eslint-disable no-loop-func */
"use strict";

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow no line breaks before if",
            category: "Possible Errors",
            recommended: true,
            url: ""
        },
        fixable: "code",
        schema: []
    },
    create: function(context) {
        var store = [];
        return {
            "BlockStatement": function(node) {
                if (node.parent.type === "IfStatement") {
                    store.push(node);
                }
                if (store.length > 1) {
                    for (var i = 0; i < store.length - 1; i++) {
                        if (store[i].loc.end.line - store[i + 1].loc.start.line === 0) {
                            context.report({
                                node: store[i + 1],
                                message: "There are no new lines before if.",
                                fix: function(fixer) {
                                    return fixer.insertTextAfter(store[i], "\n");
                                }
                            });
                        }
                    }
                }
            }
        };
    }
};

![Node.js CI](https://github.com/nisshii0313/eslint-plugin-new-line-before-if/workflows/Node.js%20CI/badge.svg)
# eslint-plugin-new-line-before-if  
WIP(テスト中です)

## Install
あとで書く

## これは何
eslintの[no-return-else](https://eslint.org/docs/rules/no-else-return#disallow-return-before-else-no-else-return)によるコード修正が

*before*
```
if (a) {
  return b;
} else if (c) {
  return d;
}
```

*after*
```
if (a) {
  return b;
} if (c) {
  return d;
}
```

になってしまうのを

*after*
```
if (a) {
  return b;
}
if (c) {
  return d;
}
```

にするためのpluginです。

## 使い方
あとで書く

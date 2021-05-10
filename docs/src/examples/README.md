# Introduction Test

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Demo component

<demo-component/>

## Image in markdown

![Image of Yaktocat](/images/test.jpg)

## Code examples

```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```

```php
<?php
echo str_word_count("PHP");
?> 
```

```vue
<img :src="$withBase('/foo.png')" alt="foo">
```
## Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

[[toc]]

## Tips

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
## Tabs
:::: tabs type:board-card
::: tab PHP lazy
```php
<?php
echo str_word_count("PHP is givno");
?> 
```
:::
::: tab JavaScript lazy
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
:::
::::

<code-group>
<code-block title="YARN">
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>

## Tech diagrams with mermaids

<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>

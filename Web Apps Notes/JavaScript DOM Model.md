# The DOM model

## September 13th 2021

---

### What is DOM

**DOM** otherwise known as *Document Object Model* is the tree structure that that is
available for JS files. In that sense, **DOM** is the key component that permits using
JS for page interactivity.

### How to use it

The variable **document** is the one that holds all the elements in the page.

We can access the variables in several ways, including:

- ```Javascript
    document.getFirstChild
    ```

Returns the first child in the document. We can continue this recursive function to keep getting children.

- ```Javascript
    document.getLastChild
    ```

Same as first child but with the last child. In this case last child isn't recursive given we go to the leaf of the tree.

- ```Javascript
    document.getElementsByTag(<Tag_name>)
    ```

Returns an array with all the elements with the corresponding tag name

- ```Javascript
    document.getElementsByClass(<Class_name>)
    ```

Same as getElementsByTag only that with the classes, makig it more specific

- ```Javascript
    document.getElementById(<id_name>)
    ```

The most specific selector, returns a single element using its unique ID

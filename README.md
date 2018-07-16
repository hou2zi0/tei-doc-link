# tei-doc-link
Provides automatic linking of element and attribute names in code snippets to their respective page within the TEI-P5-XML documentation using JavaScript.

It also provides a simple CSS stylesheet to mimic the Atom dark theme. The classes used by the CSS are applied by JavaScript and are as follows:

* `span.delimiters`
* `span.element`
* `span.attribute`
* `span.value`
* `span.comment-string`
* `a.tei-doc-link`
* `code.xml.tei-doc-link`

## Usage
Include the JavaScript file at the bottom of your HTML page.  Just before that you may provide the class names of the code snippets where you want to link to the TEI documentation in the constant variable `TEI_DOC_LINK` .

N.b.: the CSS file expects `xml tei-doc-link` on `code` and if `TEI_DOC_LINK` is not provided, it will be set as `xml tei-doc-link`.

```
<html>
  <head/>
  <body>
    <pre><code class="xml tei-doc-link">&lt;gap reason="ellipsis"/&gt;</code></pre>
  […]
    <script>
      const TEI_DOC_LINK = `xml tei-doc-link`;
    </script>
    <script src="resources/js/tei-documentation-links.js" />
  </body>
</html>
```

## What elements and attributes will be linked?

Every element name recognized as such by the regular expression will be linked to its assumed TEI documentation page, regardless of its actual existence.

Attribute names will be linked, if they are part of the following list: `["type", "subtype", "xml:id", "xml:lang", "n", "key", "ref", "rend", "style", "rendition", "resp", "cert", "lemma", "lemmaRef", "role", "nymRef", "sex", "age", "unit", "quantity", "extent", "precision", "scope", "atLeast", "atMost", "min", "max", "confidence", "hand", "place", "scribe", "scribeRef", "script", "scriptRef", "medium", "reason", "agent", "corresp", "synch", "sameAs", "copyOf", "next", "prev", "exclude", "select", "when", "notBefore", "notAfter", "from", "to", "when-iso", "notBefore-iso", "notAfter-iso", "from-iso", "to-iso", "when-custom", "notBefore-custom", "notAfter-custom", "from-custom", "to-custom", "datingPoint", "datingMethod", "dur", "dur-iso", "break", "calendar", "period", "status", "cause", "seq", "who", "ana", "facs", "met", "real", "rhyme", "value", "locus", "assertedValue", "given", "degree"]`

## To Do

* Revise and evaluate the list of attribute names.
* Refactor the RegEx recognizing element names.
* Include element context in linking of attribute names.

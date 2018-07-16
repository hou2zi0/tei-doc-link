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

N.B.: Third party libraries may provide their own markup and classes. Thus there’s a possibility that the CSS gets scrambled, when too many libraries work on the codes snippets.

## Usage
Include the JavaScript file at the bottom of your HTML page.  Just before that you may provide the class names of the code snippets where you want to link to the TEI documentation in the constant variable `TEI_DOC_LINK` .

N.b.: the CSS file expects `xml tei-doc-link` on `code` and if `TEI_DOC_LINK` is not provided, it will be set as `xml tei-doc-link`.

```html
<html>
  <head>
    <link rel="stylesheet" href="https://hou2zi0.github.io/tei-doc-link/CSS/tei-documentation-links.css" />
  </head>
  <body>
    <pre><code class="xml tei-doc-link">&lt;gap reason="ellipsis"/&gt;</code></pre>
  […]
    <script>
      const TEI_DOC_LINK = `xml tei-doc-link`;
    </script>
      <script type="text/javascript" src="https://hou2zi0.github.io/tei-doc-link/JS/tei-documentation-links.js"></script>
  </body>
</html>
```

## What elements and attributes will be linked?

Every element name recognized as such by the regular expression will be linked to its assumed TEI documentation page, regardless of its actual existence.

Attribute names will be linked, if they are part of the following dictionary:
```javascript
{
  "type": "att.typed",
  "subtype": "att.typed",
  "xml:id": "att.global",
  "xml:lang": "att.global",
  "n": "att.global",
  "key": "att.canonical",
  "ref": "att.canonical",
  "rend": "att.global.rendition",
  "style": "att.global.rendition",
  "rendition": "att.global.rendition",
  "resp": "att.global.responsibility",
  "cert": "att.global.responsibility",
  "lemma": "att.linguistic",
  "lemmaRef": "att.linguistic",
  "role": "att.naming",
  "nymRef": "att.naming",
  "sex": "person",
  "age": "person",
  "unit": "att.dimensions",
  "quantity": "att.dimensions",
  "extent": "att.dimensions",
  "precision": "att.dimensions",
  "scope": "att.dimensions",
  "atLeast": "att.ranging",
  "atLeast": "att.ranging",
  "atMost": "att.ranging",
  "min": "att.ranging",
  "max": "att.ranging",
  "confidence": "att.ranging",
  "hand": "att.written",
  "place": "att.placement",
  "scribe": "att.handFeatures",
  "scribeRef": "att.handFeatures",
  "script": "att.handFeatures",
  "scriptRef": "att.handFeatures",
  "medium": "att.handFeatures",
  "scope": "att.handFeatures",
  "reason": "gap",
  "agent": "gap",
  "corresp": "att.global.linking",
  "synch": "att.global.linking",
  "sameAs": "att.global.linking",
  "copyOf": "att.global.linking",
  "next": "att.global.linking",
  "prev": "att.global.linking",
  "exclude": "att.global.linking",
  "select": "att.global.linking",
  "when": "att.datable.w3c",
  "notBefore": "att.datable.w3c",
  "notAfter": "att.datable.w3c",
  "from": "att.datable.w3c",
  "to": "att.datable.w3c",
  "when-iso": "att.datable.iso",
  "notBefore-iso": "att.datable.iso",
  "notAfter-iso": "att.datable.iso",
  "from-iso": "att.datable.iso",
  "to-iso": "att.datable.iso",
  "when-custom": "att.datable.custom",
  "notBefore-custom": "att.datable.custom",
  "notAfter-custom": "att.datable.custom",
  "from-custom": "att.datable.custom",
  "to-custom": "att.datable.custom",
  "datingPoint": "att.datable.custom",
  "datingMethod": "att.datable.custom",
  "dur": "att.duration.w3c",
  "dur-iso": "att.duration.iso",
  "break": "att.breaking",
  "calendar": "att.datable",
  "period": "att.datable",
  "status": "att.transcriptional",
  "cause": "att.transcriptional",
  "seq": "att.transcriptional",
  "who": "att.ascribed",
  "ana": "att.global.analytic",
  "facs": "att.global.facs",
  "met": "att.metrical",
  "real": "att.metrical",
  "rhyme": "att.metrical",
  "value": "num",
  "locus": "certainty",
  "assertedValue": "certainty",
  "given": "certainty",
  "degree": "certainty"
}
```

## Example

When it works, it should look like this:

![Code Snippet with links to TEI documentation and dark theme](data/img/tei-doc-link_001.png)

![Link from attribute name to TEI documentation](data/img/tei-doc-link_002.png)

The line numbers are provided by [Highlight.js](http://idodev.co.uk/2013/03/syntax-highlighting-with-highlightjs/).

## To Do

* Revise and evaluate the list of attribute names.
* Refactor the RegEx recognizing element names.
* Include element context in linking of attribute names.
* Provide line numbering.

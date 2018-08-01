// @see https://github.com/hou2zi0/tei-doc-link
if (typeof TEI_DOC_LINK === 'undefined') TEI_DOC_LINK = `xml tei-doc-link`;
if (typeof TEI_DOC_LINK_CONFIG === 'undefined') TEI_DOC_LINK_CONFIG = {};

if (typeof TEI_DOC_LINK_CONFIG.language === 'undefined') TEI_DOC_LINK_CONFIG.language = `en`;

let codeList;

if (TEI_DOC_LINK_CONFIG.querySelectorAll) {
  codeList = document.querySelectorAll(TEI_DOC_LINK);
} else {
  codeList = document.getElementsByClassName(TEI_DOC_LINK);
}


function teiDocLinks() {
  const TEI_DOC_LINK_CONSTANTS = {
    "language_options": {
      "en": "en",
      "english": "en",
      "de": "de",
      "german": "de",
      "es": "es",
      "spanish": "es",
      "it": "it",
      "italian": "it",
      "fr": "fr",
      "french": "fr",
      "ja": "ja",
      "japanese": "ja",
      "ko": "ko",
      "korean": "ko",
      "zh-TW": "zh-TW",
      "traditional chinese": "zh-TW",
    },
    "tei_attribute_lookup": {
      "common": {
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
        "degree": "certainty",
        "evidence": "att.editLike",
        "instant": "att.editLike",
      },
      "specific": {
        "correspAction:type": "correspAction",
        "gap:reason": "gap",
        "gap:agent": "gap",
        "supplied:reason": "supplied",
        "num:type": "num",
        "num:value": "num",
        "space:resp": "space",
        "space:dim": "space",
        "pc:force": "pc",
        "pc:unit": "pc",
        "pc:pre": "pc",
        "person:role": "person",
      }
    }
  };

  const language_option = TEI_DOC_LINK_CONSTANTS.language_options[TEI_DOC_LINK_CONFIG.language]

  // elementReplacer function (includes attribute attributeReplacer function declaration)
  function elementReplacer(match, p1, p2, p3, p4, offset, string) {
    const frontDelimiters = (p1) ? p1 : "";
    const element = (p2) ? p2 : "";
    const attribute = (p3) ? p3 : "";
    const backDelimiter = (p4) ? p4 : "";

    // ATTRIBUTES & VALUES
    const regexAttr = `([-A-Za-z:]*?)="(.*?)"`;
    const regularExpressionAttr = new RegExp(regexAttr, 'g');

    // Replace function for RegEx maps attribute names to respective TEI documentation pages
    function attributeReplacer(match, p1, p2, offset, string) {
      const tei_attributes = TEI_DOC_LINK_CONSTANTS.tei_attribute_lookup.common;
      const tei_attributes_specific = TEI_DOC_LINK_CONSTANTS.tei_attribute_lookup.specific;

      let attribute = p1;
      let curr_element = element;

      if (attribute in tei_attributes) {
        const tei_attribute = (tei_attributes_specific[`${curr_element}:${attribute}`]) ? tei_attributes_specific[`${curr_element}:${attribute}`] : tei_attributes[attribute];

        attribute = `<a class='tei-doc-link' href='http://www.tei-c.org/release/doc/tei-p5-doc/${language_option}/html/ref-${tei_attribute}.html#tei_att.${attribute.replace(':','-')}'>${attribute}</a>`
      }

      const value = p2;
      return `<span class="attribute">${attribute}</span><span class="delimiters">=</span><span class="value">"${value}"</span>`;
    }

    const newSnippetAttr = attribute.replace(regularExpressionAttr, attributeReplacer);

    return `<span class='delimiters'>&lt;${frontDelimiters}</span><span class='element'><a class='tei-doc-link' href='http://www.tei-c.org/release/doc/tei-p5-doc/${language_option}/html/ref-${element}.html'>${element}</a>${newSnippetAttr}</span><span class='delimiters'>${backDelimiter}&gt;</span>`;
  }


  // PROCESSING of found node list
  Array.from(codeList)
    .forEach((node) => {
      const text = node.textContent.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      // ELEMENT NAMES
      const regexEl = `&lt;([\/\?]{0,1})([-A-Za-z:]*?)(\\s.*?.*?){0,1}([\/\?]{0,1})&gt;`;
      const regularExpressionEl = new RegExp(regexEl, 'g');
      // for elementReplacer function declaration and attributeReplacer function declaration see above
      const newSnippetEl = text.replace(regularExpressionEl, elementReplacer);
      // COMMENT STRINGS
      const regexCommStr = `(&lt;\!)(.*?)(&gt;)`;
      const regularExpressionCommStr = new RegExp(regexCommStr, 'g');
      const newSnippetCommStr = newSnippetEl.replace(regularExpressionCommStr, '<span class="comment-string">$1$2$3</span>');

      let snippet;

      if (TEI_DOC_LINK_CONFIG.lineNumbering && node.parentNode.nodeName == 'PRE') {
        snippet = newSnippetCommStr.split('\n')
          .filter((line) => {
            return line.length > 0
          })
          .map((line, index) => {
            return `<span class="line-numbering">${index+1}</span><span class="code-line">${line}</span>`;
          })
          .join('\n');
        node.parentNode.setAttribute('style', 'padding-left: 35px;');
      } else {
        snippet = newSnippetCommStr;
      }
      node.innerHTML = snippet;
    });
};

teiDocLinks();
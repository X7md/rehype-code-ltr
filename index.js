/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @typedef {Record<string, string>} Sources
 * @typedef {Record<string, Sources>} Options
 */

import {visit} from 'unist-util-visit'
import {isElement} from 'hast-util-is-element'
import replaceExt from 'replace-ext'

//const own = {}.hasOwnProperty

/**
 * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
 */
export default function rehypeCodeLtr(options) {
  const settings = options || {}

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        !isElement(node, 'code')
      ) {
        return
      }

      /** @type {Element['children']} */
      const nodes = []
        node.properties["dir"] = "ltr"
        node.properties["class"] ? node.properties["class"] += " inline-code" : node.properties["class"] = "inline-code"
      /** @type {Element} */
      const replacement = node
      parent.children[index] = replacement

    })
  }
}

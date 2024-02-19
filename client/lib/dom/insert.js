import { getNode } from "./getNode.js";

export function insertBefore(node,text){
  if(typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforebegin',text)
}

export function insertFirst(node,text){
  if(typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterbegin',text)
}

export function insertLast(node,text){
  if(typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforeend',text)
}

export function insertAfter(node,text){
  if(typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterend',text)
}




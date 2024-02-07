function clearContents(node){
  if(typeof node === 'string') node = getNode(node);

  if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
    node.value = ''
    return;
  }
  node.textContent = ''
}
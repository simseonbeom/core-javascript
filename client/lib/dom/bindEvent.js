
function bindEvent(node,type,handler){

  if(typeof node === 'string') node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler);

}

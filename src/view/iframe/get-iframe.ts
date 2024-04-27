export default function getIframe(el: HTMLElement) {
  const refWindow = el.ownerDocument.defaultView;

  if (refWindow && refWindow.self !== refWindow.parent) {
    const iframe = refWindow.frameElement as HTMLIFrameElement;

    return iframe;
  }

  return null;
}

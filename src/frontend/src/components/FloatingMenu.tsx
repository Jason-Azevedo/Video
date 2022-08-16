import React, { useRef, useEffect } from "react";

interface IFloatingMenuProps {
  show: boolean;
  children?: React.ReactNode;

  /** Absolute position styles: top, left etc... */
  position: React.CSSProperties;
  offMenuClickHandler?: (event: MouseEvent) => any;
}

/**
 * Floating menu that displays any content within `props.children`.
 *
 * NOTE: The container of the floating menu must have position: relative.
 * @param props
 */
export function FloatingMenu(props: IFloatingMenuProps) {
  const { show, children, offMenuClickHandler, position } = props;

  const refMenu = useRef<HTMLDivElement>(null);
  const refShow = useRef(show);
  refShow.current = show;

  const offMenuClickListener = (event: MouseEvent) => {
    const didClickOnMenu = refMenu.current?.contains(event.target as Node);

    // Ref used to avoid stale state
    if (refShow.current && !didClickOnMenu && offMenuClickHandler)
      offMenuClickHandler(event);
  };

  useEffect(() => {
    // Register click off listener
    document.addEventListener("mousedown", offMenuClickListener);

    // Cleanup when component unmounts
    return () =>
      document.removeEventListener("mousedown", offMenuClickListener);
  }, []);

  return (
    <div
      className={`floating-menu${show ? "" : " hidden"}`}
      style={position}
      ref={refMenu}
    >
      {children}
    </div>
  );
}

export default FloatingMenu;

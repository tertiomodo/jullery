import { useEffect, useRef } from "react";

interface Props {
  menuOpen: boolean;
  isMenuClick: boolean;
  setIsMenuClick: React.Dispatch<React.SetStateAction<boolean>>;
  sectionID: number;
  setSectionID: React.Dispatch<React.SetStateAction<number>>;
}

export const useSectionAnimation = ({
  menuOpen,
  isMenuClick,
  setIsMenuClick,
  sectionID,
  setSectionID,
}: Props) => {
  const scrollDirection = useRef<string | "up" | "down">("");
  const isScrolling = useRef<boolean>(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const isSwiping = useRef<boolean>(false);
  const swipeTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    function setActiveSection() {
      sections.forEach((section) => {
        section.classList.remove("activeSection");
        section.classList.remove("inTop");
        section.classList.remove("inBottom");
      });

      const currentSection = sections[sectionID] as HTMLElement;
      currentSection.classList.add(
        `${scrollDirection.current === "down" ? "inBottom" : "inTop"}`
      );
      currentSection.classList.add("activeSection");
    }

    function menuClickHandler() {
      setIsMenuClick(false);
      setActiveSection();
    }

    isMenuClick && menuClickHandler();

    function increaseID() {
      if (sectionID < sections.length - 1) {
        scrollDirection.current = "down";
        setSectionID(++sectionID);
        setActiveSection();
      }
    }

    function descreaseID() {
      if (sectionID !== 0) {
        scrollDirection.current = "up";
        setSectionID(--sectionID);
        setActiveSection();
      }
    }

    function scrollHandler(e: WheelEvent) {
      if (!menuOpen) {
        clearTimeout(scrollTimeout.current);

        if (!isScrolling.current) {
          if (e.deltaY < 0) {
            descreaseID();
          } else {
            increaseID();
          }

          isScrolling.current = true;
        }

        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isScrolling.current = false;
        }, 70);
      }
    }

    let touchStartY = 0;
    let touchEndY = 0;

    function swipeHandler() {
      if (!menuOpen) {
        const diffY = touchEndY - touchStartY;
        const minSwipeDistance = 50;

        if (Math.abs(diffY) > minSwipeDistance && !isSwiping.current) {
          if (diffY > 0) {
            descreaseID();
          } else {
            increaseID();
          }

          isSwiping.current = true;
        }

        clearTimeout(swipeTimeout.current);
        swipeTimeout.current = setTimeout(() => {
          isSwiping.current = false;
        }, 500);
      }
    }

    function touchStartHandler(e: TouchEvent) {
      touchStartY = e.changedTouches[0].screenY;
    }

    function touchEndHandler(e: TouchEvent) {
      touchEndY = e.changedTouches[0].screenY;
      swipeHandler();
    }

    document.addEventListener("wheel", scrollHandler, { passive: true });
    document.addEventListener("touchstart", touchStartHandler);
    document.addEventListener("touchend", touchEndHandler);

    return () => {
      document.removeEventListener("wheel", scrollHandler);
      document.removeEventListener("touchstart", touchStartHandler);
      document.removeEventListener("touchend", touchEndHandler);
    };
  }, [sectionID, menuOpen, isMenuClick]);
};

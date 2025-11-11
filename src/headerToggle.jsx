import { useEffect } from "react";

export default function HeaderToggle() {
  useEffect(() => {
    const btn = document.querySelector(".header-toggle");
    if (!btn) return;

    const toggleHeader = () => {
      document.querySelector("#header").classList.toggle("header-show");
      btn.classList.toggle("bi-list");
      btn.classList.toggle("bi-x");
    };

    btn.addEventListener("click", toggleHeader);

    document.querySelectorAll("#navmenu a").forEach((link) => {
      link.addEventListener("click", () => {
        if (document.querySelector(".header-show")) toggleHeader();
      });
    });

    return () => {
      btn.removeEventListener("click", toggleHeader);
    };
  }, []);

  return null;
}

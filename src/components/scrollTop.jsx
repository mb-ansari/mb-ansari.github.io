import { useEffect, useState } from "react";

export default function ScrollTopPreloader() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  // کنترل دکمه Scroll Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // کنترل Preloader
  useEffect(() => {
    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false); // اگر تصویر نداریم
      return;
    }

    images.forEach((img) => {
      if (img.complete) loadedCount++;
      else img.onload = () => loadedCount++;
    });

    const checkLoaded = setInterval(() => {
      if (loadedCount === images.length) {
        setLoading(false);
        clearInterval(checkLoaded);
      }
    }, 100);

    // timeout اجباری برای اطمینان از حذف preloader حتی اگر تصاویر دیر لود شوند
    const fallbackTimer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearInterval(checkLoaded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      {loading && <div id="preloader" className="preloader"></div>}

      <a
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${showScrollTop ? "active" : ""
          }`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

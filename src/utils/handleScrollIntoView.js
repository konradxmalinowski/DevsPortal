export const handleScrollIntoView = (ref) => {
  const element = ref.current;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('active');
          observer.unobserve(element);
        }
      });
    },
    {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.2,
    }
  );

  if (element) {
    observer.observe(element);
  }

  return [element, observer];
};

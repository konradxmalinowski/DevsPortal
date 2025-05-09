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
      threshold: 0.2,
    }
  );

  if (element) {
    observer.observe(element);
  }

  return [element, observer];
};

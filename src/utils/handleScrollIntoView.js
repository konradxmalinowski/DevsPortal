export const handleScrollIntoView = (ref) => {
  const element = ref.current;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('active');
            observer.unobserve(element);
          }, 100);
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

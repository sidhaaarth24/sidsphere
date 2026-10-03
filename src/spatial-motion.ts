const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  const root = document.documentElement;
  let targetX = 0, targetY = 0, smoothX = 0, smoothY = 0, scrollTarget = 0, smoothScroll = 0;
  window.addEventListener('pointermove', (e) => {
    targetX = (e.clientX / innerWidth - .5) * 2;
    targetY = (e.clientY / innerHeight - .5) * 2;
  }, { passive:true });
  window.addEventListener('scroll', () => { scrollTarget = scrollY; }, { passive:true });
  const raf = () => {
    smoothX += (targetX - smoothX) * .055; smoothY += (targetY - smoothY) * .055; smoothScroll += (scrollTarget - smoothScroll) * .06;
    root.style.setProperty('--pointer-x', smoothX.toFixed(3)); root.style.setProperty('--pointer-y', smoothY.toFixed(3)); root.style.setProperty('--scroll-y', smoothScroll.toFixed(1));
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

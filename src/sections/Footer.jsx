const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center gap-5 flex-wrap">
      <div className="flex gap-3">
        <a className="social-icon" href="https://github.com/Danish-Osahan/Profile" target="_blank">
          <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://www.linkedin.com/in/danishosahan/" target="_blank">
          <img src="assets/linkedin.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
      </div>
    </section>
  );
};

export default Footer;

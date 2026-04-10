const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          Copyright {currentYear}{" "}
          <a
            href="https://github.com/Trungnef"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bui The Trung
          </a>
          . All rights reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;

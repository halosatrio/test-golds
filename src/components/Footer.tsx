const Footer = () => {
  return (
    <footer className="mt-12 leading-4 text-sm border-t border-gray-400">
      <div className="flex flex-col md:flex-row justify-center items-center mt-1">
        <div className="my-3">
          2023 with ❤️ by{" "}
          <a
            href="https://bayubit.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-pink-600"
          >
            Satrio Bayu
          </a>
        </div>
        <span className="hidden md:inline md:mx-2">|</span>
        <div>
          e-mail:{" "}
          <a
            href="mailto:satrio.bayu.a@gmail.com"
            className="font-bold text-pink-600"
          >
            satrio.bayu.a@gmail.com
          </a>
        </div>
      </div>
      <div className="my-4 text-center">
        <a
          href="https://github.com/halosatrio/test-golds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-1.5 text-sm font-bold rounded text-white bg-stone-800">
            go to repository
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

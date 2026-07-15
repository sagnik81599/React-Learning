import React, { useEffect, useRef } from "react";

function Useref() {
  const inputRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const aboutScroll = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const contactScroll = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav>
        <button>Home</button>

        <button onClick={aboutScroll}>
          About
        </button>

        <button onClick={contactScroll}>
          Contact Us
        </button>

        <button>Education</button>
      </nav>

      <section>
        <h1>Home</h1>

        <p>
           is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </p>

        <input
          ref={inputRef}
          type="text"
          placeholder="Focus comes here automatically"
        />
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section ref={aboutRef}>
        <h1>About</h1>

        <p>
           is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </p>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section ref={contactRef}>
        <h1>Contact Us</h1>

        <p>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </p>
      </section>
    </div>
  );
}

export default Useref;
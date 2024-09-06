import "../styles/contactUs.scss"

export const ContactsUs = () => (
  <section className="main__contactsUs contactUs" id="contactUs">
    <p className="contactUs__title">Lets Design Together</p>
    <p className="contactUs__text">
      Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
    </p>

    <div className="contactUs__field">
      <input
        type="email"
        className="contactUs__input"
        placeholder="Enter Your Email"
      />
      <button className="contactUs__button">
        Contact Me
      </button>
    </div>
  </section>
)
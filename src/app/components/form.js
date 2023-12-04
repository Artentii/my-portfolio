"use client";
import InputFieldComponent from "./inputField";
import TextAreaComponent from "./textArea";

function FormComponent() {
  const nameType = {
    type: "text",
    placeholder: "Enter your full name here",
    id: "full-name",
    name: "fullname",
  };
  const emailType = {
    type: "email",
    placeholder: "Enter your valid e-mail here",
    id: "username",
    name: "username",
  };
  const messageType = {
    type: "text",
    placeholder: "Hey. Let's talk about your project. Any requirements, ideas, goals, or examples to get the discussion started.",
    id: "message",
    name: "message",
    rows: 5,
  };

  return (
    <div className={`w-1/2 `}>
      <form action="#" className={`bg-antique-white border-2 border-razzmataz shadow-project-card rounded p-6`} onSubmit={submitContactMessage}>
        {/* Name */}
        <div className="pb-2">
          <label className={`block text-gray my-2 font-medium`} htmlFor="message">
            Full name (*)
          </label>
          <InputFieldComponent type={nameType} />
          <div id={`fullname-required`} className={`text-red-500 italic text-sm mt-1`} />
        </div>
        {/* E-mail */}
        <div className="pb-2">
          <label className={`block text-gray my-2 font-medium`} htmlFor="username">
            E-mail (*)
          </label>
          <InputFieldComponent type={emailType} />
          <div id={`username-required`} className={`text-red-500 italic text-sm mt-1`} />
        </div>
        {/* Message */}
        <div className="pb-2">
          <label className={`block text-gray my-2 font-medium`} htmlFor="username">
            Message (*)
          </label>
          <TextAreaComponent type={messageType} />
          <div id={`message-required`} className={`text-red-500 italic text-sm mt-1`} />
        </div>
        {/* Submit button */}
        <div>
          <button type="submit" className="mt-2 py-4 px-8 bg-razzmataz text-antique-white lg:hover:bg-lavander-pink lg:hover:text-razzmataz rounded-md transition-all duration-300 ease-in-out">
            Send message
          </button>
        </div>

        <div id={`message-success`} className={`text-green-500 italic text-lg mt-1`} />
      </form>
    </div>
  );
}

function submitContactMessage(event) {
  event.preventDefault();

  const userEmail = event.target.username.value;
  const userFullName = event.target.fullname.value;
  const userMessage = event.target.message.value;

  if (!userFullName) {
    document.getElementById("fullname-required").innerHTML = "Full name is required";
  }
  if (!userEmail) {
    document.getElementById("username-required").innerHTML = "A valid e-mail is required";
  }
  if (!userMessage) {
    document.getElementById("message-required").innerHTML = "Message is required";
    return;
  }

  document.getElementById("message-success").innerHTML = "Thank you for contacting me. I'll soon be in touch with you.";
}

export default FormComponent;

import { useRef, useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import { Mail, MapPin, Phone } from "lucide-react";

import NotificationBar from "../components/NotificationBar";

const Contact = () => {
  return (
    <div className="flex flex-col lg:items-center lg:flex-row gap-20 w-full">
      {/* short info */}
      <div className="order-2">
        <ContactForm />
      </div>

      {/* image */}
      <div className="order-1 lg:order-2">
        <ContactDetails />
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showNotification = (type, message) => {
    setNotification({
      visible: true,
      message,
      type,
    });

    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  const f_name = useRef(null);
  const l_name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const service = useRef(null);
  const message = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();

    const _f_name = f_name.current.value;
    const _email = email.current.value;
    const _service = service.current.value;
    const _message = message.current.value;

    if (!_f_name || !_email || !_service || !_message) {
      return showNotification("error", "Enter required fields");
    }

    const form = {
      f_name: _f_name,
      l_name: l_name.current.value,
      email: _email,
      phone: phone.current.value,
      service: _service,
      message: _message,
    };

    console.log(form);
    showNotification("success", "Message sent succesfuuly");
  };

  return (
    <div className="p-6 bg-gray-700/60 rounded-lg space-y-4">
      <div className="text-teal-500 font-semibold text-3xl sm:text-4xl">
        Let's work together
      </div>

      <div className="text-white/60 text-sm">
        Lorem ipsium dolor sit met, constructor aduuyue skill.
        <br />
        Recieprnt eh sile esum comabde.
      </div>

      <form onSubmit={submitForm} className="space-y-4">
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Input label="Firstname" ref={f_name} />
          <Input label="Lastname" ref={l_name} />
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Input label="Email" ref={email} type="email" />
          <Input label="Phone No." ref={phone} type="tel" />
        </div>

        <Select
          options={[
            "Web Development",
            "Mobile Development",
            "Server Development",
          ]}
          placeholder="Select one"
          label="Service"
          ref={service}
        />

        <TextArea label="Message" ref={message} />

        <button
          type="submit"
          className="bg-teal-500 flex hover:bg-transparent duration-300 transition text-black hover:text-white border rounded-3xl text-[16px] font-semibold cursor-pointer border-teal-500 text-sm py-2.5 px-3 sm:px-4 ml-4 shadow-2xl group items-center gap-2 justify-center"
        >
          <span className="leading-none">Send message</span>
        </button>
      </form>

      <NotificationBar
        visible={notification.visible}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Phone */}
      <div className="flex gap-4 items-center">
        <div className="rounded bg-gray-700 size-[50px] shadow-2xl flex items-center justify-center text-teal-500">
          <Phone size={25} className="fill-teal-500 stroke-none" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm text-white/50 leading-none">Phone</span>
          <span className="text-[15px] sm:text-lg font-semibold text-white leading-none">
            (+234) 901 515 3464
          </span>
        </div>
      </div>

      {/* email */}
      <div className="flex gap-4 items-center">
        <div className="rounded bg-gray-700 size-[50px] shadow-2xl flex items-center justify-center text-teal-500">
          <Mail size={25} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm text-white/50 leading-none">Email</span>
          <span className="text-[15px] sm:text-lg font-semibold text-white leading-none">
            joshadework@gmail.com
          </span>
        </div>
      </div>

      {/* location */}
      <div className="flex gap-4 items-center">
        <div className="rounded bg-gray-700 size-[50px] shadow-2xl flex items-center justify-center text-teal-500">
          <MapPin size={25} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm text-white/50 leading-none">Location</span>
          <span className="text-[15px] sm:text-lg font-semibold text-white leading-none">
            Lagos, Nigeria
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

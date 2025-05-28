import cover from "../assets/aboutcover.jpg";
import first from "../assets/aboutcover1.jpg";
import second from "../assets/aboutcover2.jpg";
import three from "../assets/aboutcover3.jpg";

const About = () => {
  return (
    <>
      <div>
        <img
          src={cover}
          alt=""
          width="100%"
          height="128px"
          style={{ marginBottom: "32px" }}
        />
      </div>
      <div className="w-[95%] m-auto mb-20">
        <h4 className="text-stone-600 text-[36px] font-bold text-center pb-5">
          About Us
        </h4>

        <p className="text-center px-10 m-auto mb-15">
          Welcome to Arittrainnes, your go-to destination for stylish,
          comfortable, and affordable fashion. Founded with a passion for
          creativity and self-expression, we believe that clothing is more than
          just fabric — it's a way to tell your story, show your personality,
          and feel confident every day. At Arittrainnes, we curate a wide range
          of apparel that blends the latest trends with timeless designs. From
          casual everyday wear to bold statement pieces, our collections are
          thoughtfully designed to fit every mood, occasion, and lifestyle.
        </p>
        <div className="flex flex-col gap-12 mt-8 px-4">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              src={first}
              alt="Our Mission"
              className="w-full lg:w-[720px] h-[350px] object-cover rounded"
            />
            <div className="w-full lg:w-[720px]">
              <h4 className="text-stone-600 text-[36px] font-bold mb-4">
                Our Mission
              </h4>
              <p className="text-justify text-gray-700 leading-relaxed">
                At Arittrainnes, our mission is simple: to empower individuals
                to express themselves through fashion that is stylish,
                affordable, and accessible to everyone. We believe clothing is
                not just about covering your body — it's a powerful way to
                express personality, mood, culture, and confidence. Our goal is
                to help every customer feel seen, valued, and stylish — no
                matter who they are or where they come from.
                <br />
                <br />
                We are passionate about making fashion inclusive. That means
                designing clothing for all shapes, sizes, and backgrounds,
                ensuring that everyone can find pieces that make them feel
                confident and comfortable. From trendy everyday outfits to
                unique statement pieces, we are committed to offering
                collections that are diverse, modern, and ever-evolving.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-[720px]">
              <h4 className="text-stone-600 text-[36px] font-bold mb-4">
                Our Vision
              </h4>
              <p className="text-justify text-gray-700 leading-relaxed">
                At Arittrainnes, we strive to become a leader in inclusive
                fashion by continuously listening to our customers and
                innovating based on their needs. We envision a world where
                everyone feels confident and stylish, every day.
              </p>
            </div>
            <img
              src={second}
              alt="Our Vision"
              className="w-full lg:w-[720px] h-[350px] object-cover rounded"
            />
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              src={three}
              alt="Our Products"
              className="w-full lg:w-[720px] h-[420px] object-cover rounded"
            />
            <div className="w-full lg:w-[720px]">
              <h4 className="text-stone-600 text-[36px] font-bold mb-4">
                Our Products
              </h4>
              <p className="text-justify text-gray-700 leading-relaxed">
                At Arittrainnes, our products are more than just clothing — they
                are a reflection of comfort, confidence, and everyday style. We
                are proud to offer a wide range of apparel that blends
                fashion-forward design with functionality, so you never have to
                choose between looking good and feeling great.
                <br />
                <br />
                Each product we create is carefully designed to meet the diverse
                needs of modern individuals. Whether you're heading to work,
                going out with friends, relaxing at home, or attending a special
                occasion, our clothing is made to fit your lifestyle. From
                classic basics to bold, on-trend pieces, we offer styles that
                allow you to express yourself freely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
